
function random_integer(min=0, max=10) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function random_integer_neq(min=0, max=10, neq=0) {
    // Get random integer in range which is not equal to neq
    var val = random_integer(min, max)
    if (val == neq){
        val = random_integer_neq(min, max, neq)
    }
    return val
}

function random_float(min=0, max=1) {
    return Math.random() * (max - min) + min;
};

function random_select(array) {
    return array[Math.floor(Math.random() * array.length)];
};

function createArray(length) {
    // Create array of specified size
    //
    // Example Usage:
    // createArray();     // [] or new Array()

    // createArray(2);    // new Array(2)
    
    // createArray(3, 2); // [new Array(2),
    //                    //  new Array(2),
    //                    //  new Array(2)]

    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}


function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}

