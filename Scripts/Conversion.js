

function getMyRates(jData) {
if (jData == null) {
alert("There was a problem parsing search results.");
return;
}
var myval = jData.ResultSet;
var mydiv = jData.xxMyDiv;
document.getElementById(mydiv).innerHTML = myval;
}

function myPrivateConverterOne(xd,xv,xbase){
var xxxt = document.getElementById('xxxto').value;
if (xv > 0) {
getExchangeRatesDiv(xd,xv,xbase,xxxt,'true');
}
}

