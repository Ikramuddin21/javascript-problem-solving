// feet to mile convert
function feetToMile(feet){
    if (feet > -1) {
        var mileConvert = feet * 0.000189394;
        return mileConvert;
    }
    else {
        return 'distance cannot be negative';
    }
}
var MileResult = feetToMile();
console.log(MileResult);

// wood calculation
function woodCalculator(chair, table, bed){
    var chairCalculation = chair * 1;
    var tableCalculation = table * 3;
    var bedCalculation = bed * 5;
    var totalWood = chairCalculation + tableCalculation + bedCalculation;
    return totalWood;
}
var woodResult = woodCalculator();
console.log(woodResult);

// building calculation
function brickCalculator(floor){
    var brickCount = 0;
    if (floor <= 10) {
        brickCount = floor * 15 * 1000;
    }
    else if (floor <= 20) {
        var homeCalculation1 = 10 * 15 * 1000;
        var other = floor - 10;
        var homeCalculation2 = other * 12 * 1000;
        brickCount = homeCalculation1 + homeCalculation2;
    }
    else {
        var homeCalculation1 = 10 * 15 * 1000;
        var homeCalculation2 = 10 * 12 * 1000;
        var other = floor - 20;
        var homeCalculation3 = other * 10 * 1000;
        brickCount = homeCalculation1 + homeCalculation2 + homeCalculation3;
    }
    return brickCount;
}
var brickCountResult = brickCalculator();
console.log(brickCountResult);

// tiny Friend
function tinyFriend(names){
    var smallName = names[0];
    for(var i = 0; i < names.length; i++) {
        var othersName = names[i];
        if (othersName.length < smallName.length) {
            smallName = othersName;
        }
    }
    return smallName;
}
var smallNameResult = tinyFriend();
console.log(smallNameResult);