const removeFromArray = function(array, ...items) {

    for (const item of items) {
        if (array.includes(item)) {
            array.splice(array.indexOf(item), 1);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
