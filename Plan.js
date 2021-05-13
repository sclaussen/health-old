'use strict'


const fs = require('fs');
const util = require('util');
const YAML = require('yaml');
const _ = require('lodash');

const k = require('./k');
const p = require('./util').p;


module.exports = class Plan {


    ingredients = [];
    totals = [];
    goals = [];

    vegetable;
    vegetableGrams = 0;
    meat;
    meatGrams = 0;


    constructor() {
        this.initializeIngredients();
        this.initializeBase();
        this.initializeToday();
        this.initializeGoals();
    }


    copy(ingredients, vegetableGrams, meatGrams) {
        let plan = new Plan();
        plan.ingredients = _.cloneDeep(ingredients);
        plan.vegetableGrams = _.cloneDeep(vegetableGrams);
        plan.meatGrams = _.cloneDeep(meatGrams);
        plan.updateTotals();
        return plan;
    }


    getIngredient(name) {
        p('name', name);
        let ingredient = _.find(this.ingredients, { name: name });
        if (!ingredient.quantity) {
            ingredient.quantity = 0;
        }
        return ingredient;
    }


    updateIngredientQuantity(name, quantity) {
        let ingredient = this.getIngredient(name);
        ingredient.quantity += quantity;
        if (ingredient.quantity <= 0) {
            ingredient.quantity = 0;
        }

        this.updateTotals();
    }


    setIngredientQuantity(name, quantity) {
        let ingredient = this.getIngredient(name);
        ingredient.quantity = quantity;
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

        // TODO: Use reduce() to do this
        for (let ingredient of this.ingredients) {
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
        for (let ingredient of this.ingredients) {

            // New fields not exported
            ingredient.calories = 0;
            ingredient.fat = 0;
            ingredient.saturated = 0;
            ingredient.trans = 0;
            ingredient.poly = 0;
            ingredient.mono = 0;
            ingredient.cholesterol = 0;
            ingredient.sodium = 0;
            ingredient.carbohydrates = 0;
            ingredient.fiber = 0;
            ingredient.sugar = 0;
            ingredient.sugarplus = 0;
            ingredient.alcohol = 0;
            ingredient.netcarbs = 0;
            ingredient.protein = 0;
            ingredient.grams = 0;
            ingredient.quantity = 0;
            ingredient.cost = 0;

            // Default empty numeric fields we depend on to 0
            ingredient.servingfat = ingredient.servingfat === '' ? 0 : ingredient.servingfat;
            ingredient.servingsaturated = ingredient.servingsaturated === '' ? 0 : ingredient.servingsaturated;
            ingredient.servingtrans = ingredient.servingtrans === '' ? 0 : ingredient.servingtrans;
            ingredient.servingpoly = ingredient.servingpoly === '' ? 0 : ingredient.servingpoly;
            ingredient.servingmono = ingredient.servingmono === '' ? 0 : ingredient.servingmono;
            ingredient.servingcholesterol = ingredient.servingcholesterol === '' ? 0 : ingredient.servingcholesterol;
            ingredient.servingsodium = ingredient.servingsodium === '' ? 0 : ingredient.servingsodium;
            ingredient.servingcarbohydrates = ingredient.servingcarbohydrates === '' ? 0 : ingredient.servingcarbohydrates;
            ingredient.servingfiber = ingredient.servingfiber === '' ? 0 : ingredient.servingfiber;
            ingredient.servingsugar = ingredient.servingsugar === '' ? 0 : ingredient.servingsugar;
            ingredient.servingsugarplus = ingredient.servingsugarplus === '' ? 0 : ingredient.servingsugarplus;
            ingredient.servingalcohol = ingredient.servingalcohol === '' ? 0 : ingredient.servingalcohol;
            ingredient.servingnetcarbs = ingredient.servingnetcarbs === '' ? 0 : ingredient.servingnetcarbs;
            ingredient.servingprotein = ingredient.servingprotein === '' ? 0 : ingredient.servingprotein;
        }
    }


    initializeBase() {
        // p('Base');
        let baseIngredients;
        try {
            baseIngredients = YAML.parse(fs.readFileSync('base.yaml', 'utf-8'));
        } catch (e) {
            console.log('baseIngredients.yaml parsing error');
            System.exit(1);
        }
        for (let name of Object.keys(baseIngredients)) {
            let quantity = baseIngredients[name];
            if (!quantity || quantity === 0) {
                continue;
            }
            this.updateIngredientQuantity(name, quantity);
        }
        p();
    }


    initializeToday() {
        // p('Today');
        let todayIngredients;
        try {
            todayIngredients = YAML.parse(fs.readFileSync('today.yaml', 'utf-8'));
        } catch (e) {
            console.log('today.yaml parsing error');
            System.exit(1);
        }
        for (let name of Object.keys(todayIngredients)) {
            let quantity = todayIngredients[name];
            if (!quantity || quantity === 0) {
                continue;
            }
            this.updateIngredientQuantity(name, quantity);


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
        try {
            this.goals = YAML.parse(fs.readFileSync('goals.yaml', 'utf-8'));
        } catch (e) {
            console.log('goals.yaml parsing error');
            System.exit(1);
        }
    }


    prepare() {
        let planIngredients = _.filter(this.ingredients, function(o) { return o.serving > 0 });
        planIngredients = _.sortBy(planIngredients, [ 'prepare' ]);
        this.printHelper(planIngredients, this.prepareSpacing);
    }


    print() {
        let planIngredients = _.filter(this.ingredients, function(o) { return o.serving > 0 });
        planIngredients = _.sortBy(this.planIngredients, [ 'category', 'name' ]);
        this.printHelper(planIngredients, this.normalSpacing);
    }


    printHelper(planIngredients, spacingFunction) {
        console.log(util.format('%s %s %s %s %s %s %s',
                                'Name'.padStart(35),
                                '#'.padStart(5),
                                'Unit'.padEnd(8),
                                'cal'.padStart(5),
                                'fat'.padStart(5),
                                'fib'.padStart(5),
                                'ncarb'.padStart(5),
                                'pro'.padStart(5),
                                '$'.padStart(5),
                               ));

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
                                this.fmt(this.goals.fiber, 1),
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
                                this.fmt(this.totals.fiber, 1),
                                this.fmt(this.totals.netcarbs, 1),
                                this.fmt(this.totals.protein, 0),
                                this.fmt(this.totals.cost, 2),
                               ));

        let section;
        for (let ingredient of planIngredients) {
            section = spacingFunction(section, ingredient);
            console.log(util.format('%s %s %s %s %s %s %s %s',
                                    ingredient.nickname.padStart(35),
                                    this.fmt(ingredient.quantity, 0, ingredient.nickname),
                                    ingredient.unit.padEnd(8),
                                    this.fmt(ingredient.calories, 0),
                                    this.fmt(ingredient.fat, 0),
                                    this.fmt(ingredient.fiber, 1),
                                    this.fmt(ingredient.netcarbs, 1),
                                    this.fmt(ingredient.protein, 0),
                                    this.fmt(ingredient.cost, 2),
                                   ));
        }
    }


    normalSpacing(section, ingredient) {
        if (!section || section !== ingredient.category) {
            console.log();
            section = ingredient.category;
        }

        return section;
    }


    prepareSpacing(section, ingredient) {
        let mod = Math.floor(ingredient.prepare / 100);
        if (!section || section !== mod) {
            console.log();
            section = mod;
        }

        return section;
    }


    fmt(n, places, nickname) {
        if (n !== Math.round(n)) {
            if (nickname && (nickname === 'Chia' || nickname === 'Olive Oil' || nickname.includes('Avocado'))) {
                places = 1;
            }
            if (nickname && nickname.includes('Avocado')) {
                places = 2;
            }
            n = n.toFixed(places);
        }

        if (n === 0) {
            return ' '.padStart(5);
        }

        return n.toString().padStart(5);
    }
};
