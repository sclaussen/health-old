'use strict'



const p = require('./util').p;



function untapped(plan, macro, name, max) {
    macro = 'serving' + macro;
    let ingredient = plan.getPlanIngredient(name);
    if (ingredient) {
        return ((max - ingredient.quantity) * ingredient.quantitymultiplier / ingredient.servingsize) * ingredient[macro];
    }

    p(name);
    ingredient = plan.getIngredient(name);
    return (max * ingredient.quantitymultiplier / ingredient.servingsize) * ingredient[macro];
}


function add(plan, name, increment, max, additionalProtein) {
    let ingredient = plan.getPlanIngredient(name);
    if (ingredient && ingredient.quantity === max) {
        return false;
    }

    if (plan.getProteinGap() < additionalProtein) {
        return false;
    }

    plan.updateIngredient(name, increment);
    return true;
}



function optimize(plan, name, min, max, macro, f) {
    p('adjust');

    if (!name) {
        return;
    }

    plan.removeIngredient(name);
    if (plan.totals[macro] > plan.goals[macro]) {
        return 0;
    }

    let grams = plan.goals[macro] - plan.totals[macro];
    let ingredient = plan.getIngredient(name);
    let ingredientGrams = (grams * ingredient.servingsize) / (ingredient.quantitymultiplier * ingredient['serving' + macro]);

    if (ingredientGrams > max) {
        ingredientGrams = max;
    } else if (ingredientGrams < min) {
        ingredientGrams = min;
    }

    if (ingredientGrams > 0) {
        ingredientGrams = f(ingredientGrams);
        plan.updateIngredient(name, ingredientGrams);
    }
}


module.exports.untapped = untapped;
module.exports.add = add;
module.exports.optimize = optimize;
