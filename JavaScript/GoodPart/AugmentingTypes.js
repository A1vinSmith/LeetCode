Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;    
    }
};

Number.method('integer', function() {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});
// document.writeln((-10/3).integer()); // -3

String.method('trim', function() {
    return this.replace(/^\s+|\s+$/g, '');
});
// document.writeln('"' + " neat " .trim() + '"');

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
// THEN MODULE, WITH AUGMENTING TYPE
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
String.method('identify', function () {
    const entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    };
    // return identify method
    return function () {
        // That is the real identify method, call replace
        return this.replace(/&([^&;]+);/g,
            // a: first param means word
            // b: second param means index
            function (a,b) {
                let r;
                r = entity[b];
                return typeof r === 'string' ? r : a;
            }
        );
    }
}()); // IIFE
// document.writeln('&lt;&quot;&gt;'.identify()); // <">

// *-*-*-*-*-*
// THEN CURRY
// *-*-*-*-*-*
Function.method('curry', function() {
    let slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)))
    }
});