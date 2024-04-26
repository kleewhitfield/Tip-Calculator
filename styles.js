document.querySelector('#tip-form').onchange = function(){

var bill = Number(document.getElementById('billTotal').value);
var tip = document.getElementById('tipInput').value;
document.getElementById('tipOutput').innerHTML = `${tip}%`;
var tipValue = bill * (tip/100)
var finalBill = bill + tipValue
console.log(finalBill)
var tipAmount = document.querySelector('#tipAmount')
var totalBillWithTip = document.querySelector('#totalBillWithTip')
var comment = document.getElementById('comment');
if (tip >= 0 && tip < 20) {
	comment.innerHTML = "CHEAP"
}  else if (tip >= 20){
	comment.innerHTML = "THAT'S MORE LIKE IT!!!"
}


tipAmount.value = tipValue.toFixed(2);
 totalBillWithTip.value =finalBill.toFixed(2);



  document.getElementById('results').style.display='block'
}