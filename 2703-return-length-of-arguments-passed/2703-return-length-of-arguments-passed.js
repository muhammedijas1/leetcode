/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    const arr = args.length
    return arr
};

/**
 * argumentsLength(1, 2, 3); // 3
 */