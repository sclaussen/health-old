'use strict'



const _ = require('lodash');

const p = require('./util').p;
const k = require('./k');
const optimize = require('./macroutils').optimize;
const untapped = require('./macroutils').untapped;
const add = require('./macroutils').add;



function addFat(plan) {
    let nuts = untapped(plan, 'fat', k.PECANS, k.PECANS_MAX);
    nuts += untapped(plan, 'fat', k.WALNUTS, k.WALNUTS_MAX);
    let oil = untapped(plan, 'fat', k.EXTRA_VIRGIN_OLIVE_OIL, k.EXTRA_VIRGIN_OLIVE_OIL_MAX);

    if (add(plan, k.MACADAMIA, 7, k.MACADAMIA_MAX, nuts + oil)) {
        return;
    }

    if (addNuts(plan, oil)) {
        return;
    }

    optimize(plan, k.EXTRA_VIRGIN_OLIVE_OIL, k.EXTRA_VIRGIN_OLIVE_OIL_MIN, k.EXTRA_VIRGIN_OLIVE_OIL_MAX, 'fat', function(n) { return parseFloat(n.toFixed(1)) });

    if (plan.goals.fat > plan.totals.fat) {
        throw 'Fat options maxed out';
    }
}


function addNuts(plan, oil) {
    let pecans = plan.getPlanIngredient(k.PECANS);
    let walnuts = plan.getPlanIngredient(k.WALNUTS);
    if (pecans && pecans.quantity === k.PECANS_MAX &&
        walnuts && walnuts.quantity === k.WALNUTS_MAX) {
        return false;
    }

    if (plan.getFatGap() < oil) {
        return false;
    }

    let states = [
        [ 0, 0, k.PECANS ],
        [ 7, 0, k.WALNUTS ],
        [ 7, 7, k.PECANS ],
        [ 14, 7, k.WALNUTS ],
        [ 14, 14, k.PECANS ],
        [ 21, 14, k.WALNUTS ],
        [ 21, 21, k.PECANS ],
        [ 28, 21, k.WALNUTS ]
    ];
    for (let state of states) {
        if (((state[0] === 0 && !pecans) || (pecans.quantity === state[0])) &&
            ((state[1] === 0 && !walnuts) || (walnuts.quantity === state[1]))) {
            plan.updateIngredient(state[2], 7);
            return true;
        }
    }
}



module.exports.addFat = addFat;
