'use strict'


const _ = require('lodash');
const p = require('./util').p;
const k = require('./k');
const untapped = require('./macroutils').untapped;
const add = require('./macroutils').add;



function addProtein(plan) {
    let mackerel = untapped(plan, 'protein', k.MOZZARELLA, k.MACKEREL_MAX);
    let eggs = untapped(plan, 'protein', k.EGGS, k.EGGS_MAX);
    let cheese = untapped(plan, 'protein', k.PARMESAN, k.PARMESAN_MAX);
    cheese += untapped(plan, 'protein', k.MOZZARELLA, k.MOZZARELLA_MAX);
    cheese += untapped(plan, 'protein', k.FETA, k.FETA_MAX);
    cheese += untapped(plan, 'protein', k.BLUE, k.BLUE_MAX);

    if (add(plan, k.TUNA, 1, k.TUNA_MAX, mackerel + eggs + cheese)) {
        return;
    }

    if (add(plan, k.MACKEREL, 1, k.MACKEREL_MAX, eggs + cheese)) {
        return;
    }

    if (add(plan, k.EGGS, 1, k.EGGS_MAX, eggs)) {
        return;
    }

    if (addCheese(plan)) {
        return;
    }

    throw 'Protein options maxed out';
}


function addCheese(plan) {
    let parmesan = plan.getPlanIngredient(k.PARMESAN);
    let mozzarella = plan.getPlanIngredient(k.MOZZARELLA);
    let feta = plan.getPlanIngredient(k.FETA);
    let blue = plan.getPlanIngredient(k.BLUE);
    if (parmesan && parmesan.quantity === k.PARMESAN_MAX &&
        mozzarella && mozzarella.quantity === k.MOZZARELLA_MAX &&
        feta && feta.quantity === k.FETA_MAX &&
        blue && blue.quantity === k.BLUE_MAX) {
        return false;
    }

    let states = [
        [ 0, 0, 0, 0, k.PARMESAN ],
        [ 7, 0, 0, 0, k.MOZZARELLA ],
        [ 7, 7, 0, 0, k.FETA ],
        [ 7, 7, 7, 0, k.BLUE ],
        [ 7, 7, 7, 7, k.PARMESAN ],
        [ 14, 7, 7, 7, k.MOZZARELLA ],
        [ 14, 14, 7, 7, k.PARMESAN ],
        [ 21, 14, 7, 7, k.MOZZARELLA ],
        [ 21, 21, 7, 7, k.FETA ],
        [ 21, 21, 14, 7, k.PARMESAN ],
        [ 28, 21, 14, 7, k.MOZZARELLA ],
    ];
    for (let state of states) {
        if (((state[0] === 0 && !parmesan) || (parmesan.quantity == state[0])) &&
            ((state[1] === 0 && !mozzarella) || (mozzarella.quantity == state[1])) &&
            ((state[2] === 0 && !feta) || (feta.quantity == state[2])) &&
            ((state[3] === 0 && !blue) || (blue.quantity == state[3]))) {
            plan.updateIngredient(state[4], 7);
            return true;
        }
    }
}



module.exports.addProtein = addProtein;
