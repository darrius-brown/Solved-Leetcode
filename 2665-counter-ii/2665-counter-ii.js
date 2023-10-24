/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    reset = init
    return {
        increment: () => {
            init++
            return init
        },
        reset: () => {
            init = reset
            return init
        },
        decrement: () => {
            init--
            return init
        }
    }  
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */