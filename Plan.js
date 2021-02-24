'use strict'



const fs = require('fs');
const util = require('util');
const YAML = require('yaml');
const _ = require('lodash');

const k = require('./k');
const p = require('./util').p;



module.exports = class Plan {


    vegetable;
    vegetableGrams = 0;
    meat;
    meatGrams = 0;
    ingredients = [];
    planIngredients = [];
    totals = [];
    goals = [];


    constructor() {
        this.initializeIngredients();
        this.initializeBase();
        this.initializeToday();
        this.initializeGoals();
    }


    getIngredient(name) {
        return _.find(this.ingredients, { name: name });
    }


    getPlanIngredient(name) {
        return _.find(this.planIngredients, { name: name });
    }


    getProteinGap() {
        return this.goals.protein - this.totals.protein;
    }


    getFatGap() {
        return this.goals.fat - this.totals.fat;
    }


    getFiberGap() {
        return this.goals.fiber - this.totals.fiber;
    }


    getNetCarbohydrateGap() {
        return this.goals.netcarbs - this.totals.netcarbs;
    }


    updateIngredient(name, quantity) {

        p('Update: ' + name + ' ' + quantity);

        // Two cases:
        // 1. If the ingredient is already part of the meal,
        //    increase/decrease the quantity.
        // 2. If the ingredient is not part of the meal, add it,
        //    increasing the quantity.
        let ingredient = _.find(this.planIngredients, { name: name });
        if (ingredient) {
            ingredient.quantity += quantity;
            if (ingredient.quantity <= 0) {
                this.removeIngredient(name);
                return;
            }
        } else {
            if (quantity < 0) {
                // throw exception invalid quantity
            }
            let dbIngredient = _.find(this.ingredients, { name: name });
            ingredient = {
                category: dbIngredient.category,

                name: name,
                nickname: this.removeAnnotations(name),
                quantity: quantity,
                unit: dbIngredient.unit,

                quantitymultiplier: dbIngredient.quantitymultiplier,
                servingsize: dbIngredient.servingsize,
                servingcostgram: dbIngredient.costgram,

                servingcalories: dbIngredient.servingcalories,
                servingfat: dbIngredient.servingfat === '' ? 0 : dbIngredient.servingfat,
                servingsaturated: dbIngredient.servingsaturated === '' ? 0 : dbIngredient.servingsaturated,
                servingtrans: dbIngredient.servingtrans === '' ? 0 : dbIngredient.servingtrans,
                servingpoly: dbIngredient.servingpoly === '' ? 0 : dbIngredient.servingpoly,
                servingmono: dbIngredient.servingmono === '' ? 0 : dbIngredient.servingmono,
                servingcholesterol: dbIngredient.servingcholesterol === '' ? 0 : dbIngredient.servingcholesterol,
                servingsodium: dbIngredient.servingsodium === '' ? 0 : dbIngredient.servingsodium,
                servingcarbohydrates: dbIngredient.servingcarbohydrates === '' ? 0 : dbIngredient.servingcarbohydrates,
                servingfiber: dbIngredient.servingfiber === '' ? 0 : dbIngredient.servingfiber,
                servingsugar: dbIngredient.servingsugar === '' ? 0 : dbIngredient.servingsugar,
                servingsugarplus: dbIngredient.servingsugarplus === '' ? 0 : dbIngredient.servingsugarplus,
                servingalcohol: dbIngredient.servingalcohol === '' ? 0 : dbIngredient.servingalcohol,
                servingnetcarbs: dbIngredient.servingnetcarbs === '' ? 0 : dbIngredient.servingnetcarbs,
                servingprotein: dbIngredient.servingprotein === '' ? 0 : dbIngredient.servingprotein,

                calories: 0,
                fat: 0,
                saturated: 0,
                trans: 0,
                poly: 0,
                mono: 0,
                cholesterol: 0,
                sodium: 0,
                carbohydrates: 0,
                fiber: 0,
                sugar: 0,
                sugarplus: 0,
                alcohol: 0,
                netcarbs: 0,
                protein: 0,

                grams: 0,
                servings: 0,
                cost: 0
            };

            this.planIngredients.push(ingredient);
        }


        // Update all the calculated fields
        ingredient.grams = ingredient.quantity * ingredient.quantitymultiplier;
        ingredient.servings = ingredient.grams / ingredient.servingsize;
        ingredient.cost = ingredient.grams * ingredient.servingcostgram;

        ingredient.calories = ingredient.servings * ingredient.servingcalories;
        ingredient.fat = ingredient.servings * ingredient.servingfat;
        ingredient.saturated = ingredient.servings * ingredient.servingsaturated;
        ingredient.trans = ingredient.servings * ingredient.servingtrans;
        ingredient.poly = ingredient.servings * ingredient.servingpoly;
        ingredient.mono = ingredient.servings * ingredient.servingmono;
        ingredient.cholesterol = ingredient.servings * ingredient.servingcholesterol;
        ingredient.sodium = ingredient.servings * ingredient.servingsodium;
        ingredient.carbohydrates = ingredient.servings * ingredient.servingcarbohydrates;
        ingredient.fiber = ingredient.servings * ingredient.servingfiber;
        ingredient.sugar = ingredient.servings * ingredient.servingsugar;
        ingredient.sugarplus = ingredient.servings * ingredient.servingsugarplus;
        ingredient.alcohol = ingredient.servings * ingredient.servingalcohol;
        ingredient.netcarbs = ingredient.servings * ingredient.servingnetcarbs;
        ingredient.protein = ingredient.servings * ingredient.servingprotein;


        this.updateTotals();
    }


    removeIngredient(name) {
        p('removeIngredient', name);
        this.planIngredients = _.filter(this.planIngredients, function(o) { return o.name !== name; });
        this.updateTotals();
    }


    updateTotals() {

        // Update the plan totals
        this.totals = {
            cost: 0,
            calories: 0,
            fat: 0,
            saturated: 0,
            trans: 0,
            poly: 0,
            mono: 0,
            cholesterol: 0,
            sodium: 0,
            carbohydrates: 0,
            fiber: 0,
            sugar: 0,
            sugarplus: 0,
            alcohol: 0,
            netcarbs: 0,
            protein: 0,
        };

        // Use reduce() to do this!!!
        for (let ingredient of this.planIngredients) {
            this.totals.cost += ingredient.cost;
            this.totals.calories += ingredient.calories;
            this.totals.fat += ingredient.fat;
            this.totals.saturated += ingredient.saturated;
            this.totals.trans += ingredient.trans;
            this.totals.poly += ingredient.poly;
            this.totals.mono += ingredient.mono;
            this.totals.cholesterol += ingredient.cholesterol;
            this.totals.sodium += ingredient.sodium;
            this.totals.carbohydrates += ingredient.carbohydrates;
            this.totals.fiber += ingredient.fiber;
            this.totals.sugar += ingredient.sugar;
            this.totals.sugarplus += ingredient.sugarplus;
            this.totals.alcohol += ingredient.alcohol;
            this.totals.netcarbs += ingredient.netcarbs;
            this.totals.protein += ingredient.protein;
        }
    }


    initializeIngredients() {
        this.ingredients = YAML.parse(fs.readFileSync('ingredients.yaml', 'utf-8'));
    }


    initializeBase() {
        p('Base');
        let baseIngredients = YAML.parse(fs.readFileSync('base.yaml', 'utf-8'));
        for (let name of Object.keys(baseIngredients)) {
            let quantity = baseIngredients[name];
            if (!quantity || quantity === 0) {
                continue;
            }
            this.updateIngredient(name, quantity);
        }
        p();
    }


    initializeToday() {
        p('Today');
        let todayIngredients = YAML.parse(fs.readFileSync('today.yaml', 'utf-8'));
        for (let name of Object.keys(todayIngredients)) {
            let quantity = todayIngredients[name];
            if (!quantity || quantity === 0) {
                continue;
            }
            this.updateIngredient(name, quantity);


            switch (name) {
            case k.BROCCOLI:
            case k.BRUSSELS_SPROUTS:
            case k.CAULIFLOWER:
            case k.GREEN_BEANS:
            case k.ZUCCHINI:
                this.vegetable = name;
                this.vegetableGrams = quantity;
                break;
            case k.CHICKEN:
            case k.SALMON_BB:
            case k.SALMON_WF:
            case k.BEEF_GROUND:
            case k.BEEF_BOTTOM_ROUND_ROAST:
            case k.BEEF_CHUCK_ROAST:
            case k.BEEF_CHUCK_STEW:
            case k.BEEF_GROUND_WF:
            case k.BEEF_STEAK_NEW_YORK:
            case k.BEEF_STEAK_TOP_SIRLOIN:
            case k.BEEF_STEW:
            case k.BEEF_TRI_TIP_WF:
            case k.FISH_COD:
            case k.PORK_BABY_BACK_RIB:
            case k.PORK_CHOP:
            case k.PORK_SHOULDER_BUTT_BONE_IN_WF:
            case k.SEAFOOD_SHRIMP_WHITE_WF:
                this.meat = name;
                this.meatGrams = quantity;
                break;
            }
        }
        p(' ');
    }


    initializeGoals() {
        this.goals = YAML.parse(fs.readFileSync('goals.yaml', 'utf-8'));
    }


    print() {
        this.planIngredients = _.sortBy(this.planIngredients, [ 'category', 'name' ]);

        console.log(util.format('%s %s %s %s %s %s %s',
                                // console.log(util.format('%s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s',
                                'Name'.padStart(35),
                                '#'.padStart(5),
                                'Unit'.padEnd(8),
                                'cal'.padStart(5),
                                'fat'.padStart(5),
                                // 'sat'.padStart(5),
                                // 'tran'.padStart(5),
                                // 'poly'.padStart(5),
                                // 'mono'.padStart(5),
                                // 'chol'.padStart(5),
                                // 'na'.padStart(5),
                                // 'carb'.padStart(5),
                                'fib'.padStart(5),
                                // 'sug'.padStart(5),
                                // 'sug+'.padStart(5),
                                // 'alc'.padStart(5),
                                'ncarb'.padStart(5),
                                'pro'.padStart(5),
                                '$'.padStart(5),
                               ));

        // console.log(util.format('%s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s',
        console.log(util.format('%s %s %s %s %s %s %s %s',
                                '-------------------------'.padStart(35),
                                '-----'.padEnd(5),
                                '--------'.padEnd(8),
                                '-----'.padStart(5),
                                '-----'.padStart(5),
                                '-----'.padStart(5),
                                '-----'.padStart(5),
                                '-----'.padStart(5),
                                '-----'.padStart(5),
                               ));

        console.log(util.format('%s %s %s %s %s %s %s %s',
                                ' '.padStart(35),
                                ' '.padStart(5),
                                ' '.padEnd(8),
                                this.fmt(this.goals.calories, 0),
                                this.fmt(this.goals.fat, 0),
                                // this.fmt(this.goals.saturated),
                                // this.fmt(this.goals.trans),
                                // this.fmt(this.goals.poly),
                                // this.fmt(this.goals.mono),
                                // this.fmt(this.goals.cholesterol),
                                // this.fmt(this.goals.sodium),
                                // this.fmt(this.goals.carbohydrates),
                                this.fmt(this.goals.fiber, 1),
                                // this.fmt(this.goals.sugar),
                                // this.fmt(this.goals.sugarplus),
                                // this.fmt(this.goals.alcohol),
                                this.fmt(this.goals.netcarbs, 1),
                                this.fmt(this.goals.protein, 0),
                                ' '.padStart(5),
                               ));

        console.log(util.format('%s %s %s %s %s %s %s %s',
                                ' '.padStart(35),
                                ' '.padStart(5),
                                ' '.padEnd(8),
                                this.fmt(this.totals.calories, 0),
                                this.fmt(this.totals.fat, 0),
                                // this.fmt(this.totals.saturated),
                                // this.fmt(this.totals.trans),
                                // this.fmt(this.totals.poly),
                                // this.fmt(this.totals.mono),
                                // this.fmt(this.totals.cholesterol),
                                // this.fmt(this.totals.sodium),
                                // this.fmt(this.totals.carbohydrates),
                                this.fmt(this.totals.fiber, 1),
                                // this.fmt(this.totals.sugar),
                                // this.fmt(this.totals.sugarplus),
                                // this.fmt(this.totals.alcohol),
                                this.fmt(this.totals.netcarbs, 1),
                                this.fmt(this.totals.protein, 0),
                                this.fmt(this.totals.cost, 2),
                               ));

        let lastCategory;
        for (let ingredient of this.planIngredients) {
            // console.log(util.format('%s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s',
            if (!lastCategory || lastCategory !== ingredient.category) {
                console.log();
                lastCategory = ingredient.category;
            }
            console.log(util.format('%s %s %s %s %s %s %s %s',
                                    ingredient.nickname.padStart(35),
                                    this.fmt(ingredient.quantity, 0, ingredient.nickname),
                                    ingredient.unit.padEnd(8),
                                    this.fmt(ingredient.calories, 0),
                                    this.fmt(ingredient.fat, 0),
                                    // this.fmt(ingredient.saturated),
                                    // this.fmt(ingredient.trans),
                                    // this.fmt(ingredient.poly),
                                    // this.fmt(ingredient.mono),
                                    // this.fmt(ingredient.cholesterol),
                                    // this.fmt(ingredient.sodium),
                                    // this.fmt(ingredient.carbohydrates),
                                    this.fmt(ingredient.fiber, 1),
                                    // this.fmt(ingredient.sugar),
                                    // this.fmt(ingredient.sugarplus),
                                    // this.fmt(ingredient.alcohol),
                                    this.fmt(ingredient.netcarbs, 1),
                                    this.fmt(ingredient.protein, 0),
                                    this.fmt(ingredient.cost, 2),
                                   ));
        }
    }



    prepare() {
    }


    removeAnnotations(s) {
        let s2 = s;
        if (s.indexOf('(') > 0) {
            s2 = s.substring(0, s.lastIndexOf('('));
            s = s2;
        }
        return s2.trim();
    }


    fmt(n, places, nickname) {
        if (n !== Math.round(n)) {
            if (nickname === 'Chia Seeds' || nickname === 'Extra Virgin Olive Oil') {
                places = 1;
            }
            n = n.toFixed(places);
        }

        if (n === 0) {
            return ' '.padStart(5);
        }

        return n.toString().padStart(5);
    }
};
