'use strict'


const _ = require('lodash');

const p = require('./util').p;
const k = require('./k');
var Plan = require('./Plan');

// const addFat = require('./fat').addFat;
const addProtein = require('./protein').addProtein;
const addFat = require('./fat').addFat;
const optimize = require('./macroutils').optimize;


// TODO:
// - Transition baseline & ingredients to YAML
// - How to make ingredient input simpler
// - How to handle being out of something like baseline, etc
//
// To run:
// $ node plan
main(process.argv);


function main(args) {
    createPlan();
}


function createPlan() {
    let plan = new Plan();
    plan.print();

    try {
        while (plan.totals.protein < plan.goals.protein) {
            addProtein(plan);
            optimize(plan, plan.vegetable, 0, plan.vegetableGrams, 'netcarbs', function(n) { return Math.floor(n / 5) * 5; });
            optimize(plan, k.CHIA_SEEDS, k.CHIA_SEEDS_MIN, k.CHIA_SEEDS_MAX, 'fiber', function(n) { return parseFloat(n.toFixed(1)) });
            plan.print();
        }
    } catch (e) {
        console.log('Protein exception: ' + e);
    }

    try {
        while (plan.totals.fat < plan.goals.fat) {
            addFat(plan);
            optimize(plan, plan.vegetable, 0, plan.vegetableGrams, 'netcarbs', function(n) { return Math.floor(n / 5) * 5; });
            optimize(plan, k.CHIA_SEEDS, k.CHIA_SEEDS_MIN, k.CHIA_SEEDS_MAX, 'fiber', function(n) { return parseFloat(n.toFixed(1)) });
            plan.print();
        }
    } catch (e) {
        console.log(e);
        console.log('Fat exception: ' + e);
    }
}
