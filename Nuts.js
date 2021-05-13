function nuts(plan, name) {
    let states = {
        '0.0': k.PECANS,
        '5.0': k.WALNUTS,
        '5.5': k.PECANS,
        '10.5': k.WALNUTS,
        '10.10': k.PECANS,
        '15.10': k.WALNUTS,
        '15.15': k.PECANS,
        '20.15': k.WALNUTS,
        '20.20': k.PECAN,
        '25.20': k.WALNUTS,
        '25.25': k.PECAN,
        '30.25': k.WALNUT,
    };

    let pecans = plan.getPlanIngredient(k.PECANS);
    let walnuts = plan.getPlanIngredient(k.WALNUTS);
    let key = pecans.quantity + '.' + walnuts.quantity;
    p('  - key', key);
    if (name === states[key]) {
        return true;
    }

    return false;
}
