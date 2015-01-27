var _curry2 = require('./internal/_curry2');
var has = require('./has');


/**
 * Counts the elements of a list according to how many match each value
 * of a key generated by the supplied function. Returns an object
 * mapping the keys produced by `fn` to the number of occurrences in
 * the list. Note that all keys are coerced to strings because of how
 * JavaScript objects work.
 *
 * @func
 * @memberOf R
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      var letters = R.split('', 'abcABCaaaBBc');
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *      R.countBy(R.toLower)(letters);   //=> {'a': 5, 'b': 4, 'c': 3}
 */
module.exports = _curry2(function countBy(fn, list) {
    var counts = {};
    var len = list.length;
    var idx = -1;
    while (++idx < len) {
        var key = fn(list[idx]);
        counts[key] = (has(key, counts) ? counts[key] : 0) + 1;
    }
    return counts;
});
