const prinAmount = document.getElementById("principal");
const rateAmount = document.getElementById("rate");
const mortLength = document.getElementById("years");
const paymentSpan = document.querySelector("span");

const calcMortgage = function(){
    const prinValue = Number(prinAmount.value);
    const rateValue = Number(rateAmount.value) / 1200;
    const lenValue = Number(mortLength.value) * 12;
    const payment = (prinValue * rateValue) / (1 - Math.pow((1 + rateValue), -lenValue));
    paymentSpan.textContent = "$" + payment.toFixed(2) + " per month";
}