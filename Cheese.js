'use strict';


const _ = require('lodash');

const Additive = require('./Additive');

const k = require('./k');
const p = require('./util').p;


module.exports = class Cheese {


    name = null;
    additives = [];
    untapped = {
        protein: 0,
        fat: 0
    };
    untappedCumulative = {
        protein: 0,
        fat: 0
    };


    constructor(stanza) {
        this.name = stanza.name;
        for (let additive of stanza.additives) {
            this.additives.push(new Additive(additive));
        }
    }


    calculateUntapped(plan, macro) {
        this.untapped[macro] = 0;
        for (let additive of this.additives) {
            let quantity = additive.calculateUntapped(plan, macro);
            this.untapped[macro] += quantity;
        }
    }


    calculateUntappedCumulative(plan, additives, macro) {
        this.untappedCumulative[macro] = 0;
        for (let additive of additives) {
            this.untappedCumulative[macro] += additive.untapped[macro];
        }
        // this.untappedCumulative[macro] = Math.floor(this.untappedCumulative[macro]);
    }


    add(plan) {
        let states = {
            '0.0.0.0': k.MOZZARELLA,
            '0.5.0.0': k.PARMESAN,
            '5.5.0.0': k.MOZZARELLA,
            '5.10.0.0': k.PARMESAN,
            '10.10.0.0': k.FETA,
            '10.10.5.0': k.BLUE,
            '10.10.5.5': k.MOZZARELLA,
            '10.15.5.5': k.PARMESAN,
            '15.15.5.5': k.MOZZARELLA,
            '15.20.5.5': k.PARMESAN,
            '20.20.5.5': k.FETA,
            '20.20.10.5': k.BLUE,
            '20.20.10.10': k.MOZZARELLA,
            '20.25.10.10': k.PARMESAN,
            '25.25.10.10': k.MOZZARELLA,
            '25.30.10.10': k.PARMESAN,
            '30.30.10.10': k.FETA,
            '30.30.15.10': k.BLUE,
            '30.30.15.15': k.FETA,
            '30.30.20.15': k.BLUE,
            '30.30.20.20': k.FETA,
            '30.30.25.20': k.BLUE,
            '30.30.25.25': k.FETA,
            '30.30.30.25': k.BLUE,
        };

        let parmesan = plan.getIngredient(k.PARMESAN);
        let mozzarella = plan.getIngredient(k.MOZZARELLA);
        let feta = plan.getIngredient(k.FETA);
        let blue = plan.getIngredient(k.BLUE);
        let key = parmesan.quantity + '.' + mozzarella.quantity + '.' + feta.quantity + '.' + blue.quantity;
        if (key) {
            let name = states[key];
            return [ name, _.find(additives, { name: name }).inc ];
        }
    }
}
