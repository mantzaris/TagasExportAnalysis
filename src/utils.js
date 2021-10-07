
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

