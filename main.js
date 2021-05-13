'use strict';


const fs = require('fs');
const _ = require('lodash');
const readlineSync = require('readline-sync');
const YAML = require('yaml');

const Additive = require('./Additive');
const Cheese = require('./Cheese');
const Plan = require('./Plan');

const p = require('./util').p;
const k = require('./k');
const STATUS = require('./k').STATUS;
const THRESHOLD = require('./k').THRESHOLD;


main(process.argv);


function main(args) {
    let plan = new Plan();
    let proteinAdditives;
    try {
        proteinAdditives = getAdditives(YAML.parse(fs.readFileSync('protein.yaml', 'utf-8')));
    } catch (e) {
        console.log(e);
        console.log('protein.yaml parsing error');
        process.exit(1);
    }
    let fatAdditives;
    try {
        fatAdditives = getAdditives(YAML.parse(fs.readFileSync('fat.yaml', 'utf-8')));
    } catch (e) {
        console.log(e);
        console.log('fat.yaml parsing error');
        process.exit(1);
    }

    let attempts = 0;
    while (threshold(plan, 'protein') === STATUS.YELLOW) {
        p('===============================================================================');
        add(plan, proteinAdditives, 'protein');
        adjust(plan);


        // let fatPlan = plan.copy(plan.ingredients, plan.vegetableGrams, plan.meatGrams);
        // let response = createFatPlan(fatPlan);
        // if (response === STATUS.GREEN) {
        //     console.log('ALL GREEN');
        //     process.exit(1);
        // } else if (response === STATUS.RED) {
        //     console.log('BROKEN');
        //     process.exit(1);
        // }


        if (attempts === 1) {
            console.log('100!');
            process.exit(1);
            break;
        }
        attempts++;


        // plan.print();
    }

    // plan.prepare();
}


function add(plan, additives, macro) {

    p();
    p(macro);
    p();
    let servingmacro = 'serving' + macro;


    for (let additive of additives) {
        additive.calculateUntapped(plan, macro);
    }

    for (let i in additives) {
        additives[i].calculateUntappedCumulative(plan, additives.slice(i + 1), macro);
    }


    p(additives);

    // p('Fat', Math.floor(plan.totals.fat) + '/' + plan.goals.fat + '  Protein: ' + Math.floor(plan.totals.protein) + '/' + plan.goals.protein);
    // let gap = Math.floor(plan.goals[macro] - plan.totals[macro]);
    // p('Gap', gap);
    // for (let additive of additives) {
    //     p();
    //     p('Evaluating', additive.name + ' (untapped ' + additive.untapped + ')');
    //     let ingredient = plan.getIngredient(additive.name);

    //     // See if the ingredient's servings is already at its maximum
    //     // quanity in the plan
    //     if (ingredient.servings === ingredient.max) {
    //         p('  - skipping (maxed out)');
    //         // readlineSync.question('CONTINUE> ');
    //         continue;
    //     }

    //     if (additive.untapped_cumulative && Math.floor(additive.untapped_cumulative) > 0) {
    //         p('  - untapped cumulative', Math.floor(additive.untapped_cumulative));
    //     }
    //     if (gap < additive.untapped_cumulative) {
    //         p('  - skipping (deferring ' + gap + ' < ' + additive.untapped_cumulative + ')');
    //         // readlineSync.question('CONTINUE> ');
    //         continue;
    //     }

    //     if (additive.gate && additive.gate(plan, additive.name) === false) {
    //         p('  - failed gate');
    //         // readlineSync.question('CONTINUE> ');
    //         continue;
    //     }

    //     p();
    //     p('ADDING', additive.name);
    //     plan.updateServings(additive.name, ingredient.inc);
    //     p();
    //     p('Fat', Math.floor(plan.totals.fat) + '/' + plan.goals.fat + '  Protein: ' + Math.floor(plan.totals.protein) + '/' + plan.goals.protein);

    //     // readlineSync.question('CONTINUE> ');
    //     return true;
    // }

    // // readlineSync.question('CONTINUE> ');
    // return false;
}


function createFatPlan(plan) {
    let attempts = 0;
    while (threshold(plan, 'fat') === STATUS.YELLOW) {
        p('===============================================================================');
        add(plan, fat, 'fat');
        adjust(plan);



        if (attempts === 100) {
            console.log('100!');
            break;
        }
        attempts++;
    }
}



function getAdditives(additiveStanzas) {
    let additives = [];
    for (let additiveStanza of additiveStanzas) {
        if (additiveStanza.type !== 'composite') {
            additives.push(new Additive(additiveStanza));
            continue;
        }

        switch (additiveStanza.name) {
        case 'Cheese':
            additives.push(new Cheese(additiveStanza));
            break;
        case 'Nuts':
            additives.push(new Nuts(additiveStanza));
            break;
        }
    }

    return additives;
}


function adjust(plan) {
    if (plan.vegetable) {
        addOptimalAmount(plan, plan.vegetable, 'netcarbs');
    }

    addOptimalAmount(plan, k.CHIA_SEEDS, 'fiber');
}



function addOptimalAmount(plan, name, macro) {
    let gapInGrams = plan.goals[macro] - plan.totals[macro];
    let ingredient = plan.getIngredient(name);
    let ingredientGrams = (gapInGrams * ingredient.servingsize) / (ingredient.quantitymultiplier * ingredient['serving' + macro]);

    if (ingredientGrams > ingredient.max) {
        ingredientGrams = ingredient.max;
    } else if (ingredientGrams < ingredient.min) {
        ingredientGrams = ingredient.min;
    }

    if (ingredientGrams > 0) {
        ingredientGrams = Math.floor(ingredientGrams / ingredient.inc) * ingredient.inc;
        plan.updateIngredientQuantity(name, ingredientGrams);
    } else {
        plan.setIngredientQuantity(name, 0);
    }
}


function threshold(plan, macro) {
    let goal = plan.goals[macro];
    let total = plan.totals[macro];
    let threshold = THRESHOLD[macro];
    let gapPercentage = Math.abs((goal - total) / goal) * 100;

    if (gapPercentage < threshold) {
        return STATUS.GREEN;
    }

    if (total < goal) {
        return STATUS.YELLOW;
    }

    return STATUS.RED;
}
