var dollarToEuro = function(dollarValue){
    return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
    return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///
var con1 = dollarToEuro(137);
var con2 = con1 * 124.15;
console.log(con2);