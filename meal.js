'use strict'


const util = require('util');
const fs = require('fs');

const YAML = require('yaml');
const _ = require('lodash');




// 'Onion (yellow) (365)'
// 'Blue Cheese (365)'
// 'Feta Cheese (365)'
// 'Mozzarella Cheese (365)'
// 'Parmesan Cheese (365)'
// 'Pecans (365)'
// 'Walnuts (365)'
// 'Chia Seeds (365)'
// 'Pumpkin Seeds (365)': 7,



main(process.argv);


function main(args) {
    meal(parseInt(args[2]), parseInt(args[3]), parseInt(args[4]), parseInt(args[5]));
}


function meal(fat, fiber, netcarbohydrates, protein) {
    let goals = {
        fat: fat,
        fiber: fiber,
        netcarbohydrates: netcarbohydrates,
        protein: protein
    };


    let baselineFoods = YAML.parse(fs.readFileSync('template.json', 'utf-8'));
    let foods = YAML.parse(fs.readFileSync('foods.json', 'utf-8'));
    let small = _.filter(foods, { group: '1-Small' });
    let meal = createBaselineMeal(baselineFoods, small);
    let totals = updateTotals(meal);

    printMeal(meal, totals, goals);
}


function createBaselineMeal(baselineFoods, foods) {
    let meal = [];

    for (let baselineFood of baselineFoods) {
        let food = _.find(foods, { ingredient: baselineFood.ingredient });
        let mealFood = {
            ingredient: removeAnnotations(food.ingredient),
            quantity: baselineFood.quantity,
            unit: food.unit,

            servingnormalized: food.normalized,
            servinggrams: food.servingsize,
            servingcostgram: food.costgram,

            servingcalories: food.calories,
            servingfat: food.fat === '' ? 0 : food.fat,
            servingsaturated: food.saturated === '' ? 0 : food.saturated,
            servingtrans: food.trans === '' ? 0 : food.trans,
            servingpoly: food.poly === '' ? 0 : food.poly,
            servingmono: food.mono === '' ? 0 : food.mono,
            servingcholesterol: food.cholesterol === '' ? 0 : food.cholesterol,
            servingsodium: food.sodium === '' ? 0 : food.sodium,
            servingcarbohydrates: food.carbohydrates === '' ? 0 : food.carbohydrates,
            servingfiber: food.fiber === '' ? 0 : food.fiber,
            servingsugar: food.sugar === '' ? 0 : food.sugar,
            servingsugarplus: food.sugarplus === '' ? 0 : food.sugarplus,
            servingalcohol: food.alcohol === '' ? 0 : food.alcohol,
            servingnetcarbohydrates: food.netcarbohydrates === '' ? 0 : food.netcarbohydrates,
            servingprotein: food.protein === '' ? 0 : food.protein,

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
            netcarbohydrates: 0,
            protein: 0,

            grams: 0,
            servings: 0,
            cost: 0
        };

        meal.push(mealFood);

        updateCalculatedFields(meal, mealFood.ingredient);
    }

    return meal;
}


function updateCalculatedFields(meal, ingredient) {
    let food = _.find(meal, { ingredient: ingredient });

    food.grams = food.quantity * food.servingnormalized;
    food.servings = food.grams / food.servinggrams;
    food.cost = food.grams * food.servingcostgram;

    food.calories = food.servings * food.servingcalories;
    food.fat = food.servings * food.servingfat;
    food.saturated = food.servings * food.servingsaturated;
    food.trans = food.servings * food.servingtrans;
    food.poly = food.servings * food.servingpoly;
    food.mono = food.servings * food.servingmono;
    food.cholesterol = food.servings * food.servingcholesterol;
    food.sodium = food.servings * food.servingsodium;
    food.carbohydrates = food.servings * food.servingcarbohydrates;
    food.fiber = food.servings * food.servingfiber;
    food.sugar = food.servings * food.servingsugar;
    food.sugarplus = food.servings * food.servingsugarplus;
    food.alcohol = food.servings * food.servingalcohol;
    food.netcarbohydrates = food.servings * food.servingnetcarbohydrates;
    food.protein = food.servings * food.servingprotein;
}


function updateTotals(meal) {
    let totals = {
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
        netcarbohydrates: 0,
        protein: 0,
    };

    for (let food of meal) {
        totals.cost += food.cost;
        totals.calories += food.calories;
        totals.fat += food.fat;
        totals.saturated += food.saturated;
        totals.trans += food.trans;
        totals.poly += food.poly;
        totals.mono += food.mono;
        totals.cholesterol += food.cholesterol;
        totals.sodium += food.sodium;
        totals.carbohydrates += food.carbohydrates;
        totals.fiber += food.fiber;
        totals.sugar += food.sugar;
        totals.sugarplus += food.sugarplus;
        totals.alcohol += food.alcohol;
        totals.netcarbohydrates += food.netcarbohydrates;
        totals.protein += food.protein;
    }

    p(totals);

    return totals;
}



function printMeal(meal, totals, goals) {
    console.log(util.format('%s %s %s %s %s %s %s',
                            // console.log(util.format('%s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s',
                            'Ingredient'.padStart(25),
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
                            '-------------------------'.padStart(25),
                            '-----'.padEnd(5),
                            '--------'.padEnd(8),
                            '-----'.padStart(5),
                            '-----'.padStart(5),
                            '-----'.padStart(5),
                            '-----'.padStart(5),
                            '-----'.padStart(5),
                            '-----'.padStart(5),
                           ));

    for (let food of meal) {
        // console.log(util.format('%s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s %s',
        console.log(util.format('%s %s %s %s %s %s %s %s',
                                food.ingredient.padStart(25),
                                fmt(food.quantity),
                                food.unit.padEnd(8),
                                fmt(food.calories, 0),
                                fmt(food.fat, 0),
                                // fmt(food.saturated),
                                // fmt(food.trans),
                                // fmt(food.poly),
                                // fmt(food.mono),
                                // fmt(food.cholesterol),
                                // fmt(food.sodium),
                                // fmt(food.carbohydrates),
                                fmt(food.fiber, 1),
                                // fmt(food.sugar),
                                // fmt(food.sugarplus),
                                // fmt(food.alcohol),
                                fmt(food.netcarbohydrates, 1),
                                fmt(food.protein, 0),
                                fmt(food.cost, 2),
                               ));
    }


    console.log('\n' + util.format('%s %s %s %s %s %s %s %s',
                                   ' '.padStart(25),
                                   ' '.padStart(5),
                                   ' '.padEnd(8),
                                   ' '.padStart(5),
                                   fmt(goals.fat, 0),
                                   // fmt(goals.saturated),
                                   // fmt(goals.trans),
                                   // fmt(goals.poly),
                                   // fmt(goals.mono),
                                   // fmt(goals.cholesterol),
                                   // fmt(goals.sodium),
                                   // fmt(goals.carbohydrates),
                                   fmt(goals.fiber, 1),
                                   // fmt(goals.sugar),
                                   // fmt(goals.sugarplus),
                                   // fmt(goals.alcohol),
                                   fmt(goals.netcarbohydrates, 1),
                                   fmt(goals.protein, 0),
                                   ' '.padStart(5),
                                  ));

    console.log(util.format('%s %s %s %s %s %s %s %s',
                            ' '.padStart(25),
                            ' '.padStart(5),
                            ' '.padEnd(8),
                            fmt(totals.calories, 0),
                            fmt(totals.fat, 0),
                            // fmt(totals.saturated),
                            // fmt(totals.trans),
                            // fmt(totals.poly),
                            // fmt(totals.mono),
                            // fmt(totals.cholesterol),
                            // fmt(totals.sodium),
                            // fmt(totals.carbohydrates),
                            fmt(totals.fiber, 1),
                            // fmt(totals.sugar),
                            // fmt(totals.sugarplus),
                            // fmt(totals.alcohol),
                            fmt(totals.netcarbohydrates, 1),
                            fmt(totals.protein, 0),
                            fmt(totals.cost, 2),
                           ));
}


function fmt(n, places) {
    if (n !== Math.round(n)) {
        n = n.toFixed(places);
    }

    if (n === 0) {
        return ' '.padStart(5);
    }

    return n.toString().padStart(5);
}


function removeAnnotations(s) {
    let s2;
    while (s.indexOf('(') > 0) {
        s2 = s.substring(0, s.lastIndexOf('('));
        s = s2;
    }
    return s2.trim();
}


function p(s) {
    switch (typeof(s)) {
    case 'object':
        console.log(JSON.stringify(s, null, 4));
        return;
    default:
        console.log(s);
    }
}
