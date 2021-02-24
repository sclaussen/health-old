function p(s, x) {
    switch (typeof(s)) {
    case 'object':
        console.log(JSON.stringify(s, null, 4));
        return;
    default:
        if (!s) {
            console.log();
            return;
        }
        if (x) {
            console.log(s + ': ' + x);
            return;
        }
        console.log(s);
    }
}



module.exports.p = p;
