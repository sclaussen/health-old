'use strict'


const _ = require('lodash');

const k = require('./k');
const p = require('./util').p;


module.exports = class Additive {

    name = null;
    min = 0;
    max = 0;
    inc = 0;
    untapped = {
        protein: 0,
        fat: 0
    };
    untappedCumulative = {
        protein: 0,
        fat: 0
    };


    constructor(additive) {
        this.name = additive.name;
        this.min = additive.min;
        this.max = additive.max;
        this.inc = additive.inc;
    }


    calculateUntapped(plan, macro) {
        let ingredient = plan.getIngredient(this.name);
        this.untapped[macro] = Math.floor(((this.max - ingredient.quantity) * ingredient.quantitymultiplier / ingredient.servingsize) * ingredient['serving' + macro]);
        return this.untapped[macro];
    }


    calculateUntappedCumulative(plan, additives, macro) {
        this.untappedCumulative[macro] = 0;
        for (let additive of additives) {
            this.untappedCumulative[macro] += additive.untapped[macro];
        }
    }


    add(plan) {
        let ingredient = plan.getIngredient(this.name);
        if (ingredient.quantity < this.max) {
            return [ this.name, this.inc ];
        }
    }
}
