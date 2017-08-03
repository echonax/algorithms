function arrayShiftToRight(array, times){
    var obj = {};
    var lenght = array.length;
    for(var i = 0; i < array.length; ++i){
        obj[i + times] = array[i]; // (+) for shifting right
    }

    var shiftedRes = [];
    for(var key in obj){
        shiftedRes[Number(key) % lenght] = obj[key];
    }

    return shiftedRes;
}
