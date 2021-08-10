export function ShowDecimals(value, decimal_points = 2){
    var pointNum = parseFloat(value);
    return pointNum.toFixed(decimal_points);
}
