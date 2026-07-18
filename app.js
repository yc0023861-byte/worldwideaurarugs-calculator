function calculate() {

let l = parseFloat(document.getElementById("length").value);
let w = parseFloat(document.getElementById("width").value);
let h = parseFloat(document.getElementById("height").value);
let actual = parseFloat(document.getElementById("weight").value);
let courier = document.getElementById("courier").value;

if(isNaN(l) || isNaN(w) || isNaN(h) || isNaN(actual)){
    alert("Please fill all fields");
    return;
}

let divisor = 5000;

if(courier=="DHL") divisor=5000;
if(courier=="FedEx") divisor=5000;
if(courier=="UPS") divisor=5000;

let volumetric=(l*w*h)/divisor;

let chargeable=Math.max(actual,volumetric);

document.getElementById("result").innerHTML=
`
<b>Courier:</b> ${courier}<br><br>

📦 Volumetric Weight :
<b>${volumetric.toFixed(2)} kg</b>

<br><br>

⚖ Chargeable Weight :
<b>${chargeable.toFixed(2)} kg</b>
`;

}
function profit(){

let price=parseFloat(document.getElementById("price").value);
let cost=parseFloat(document.getElementById("cost").value);
let shipping=parseFloat(document.getElementById("shipping").value);

if(isNaN(price)||isNaN(cost)||isNaN(shipping)){
alert("Fill all fields");
return;
}

let etsyFee=price*0.065;
let paymentFee=price*0.03;

let net=price-cost-shipping-etsyFee-paymentFee;

document.getElementById("profitResult").innerHTML=`
<h3>Net Profit : $${net.toFixed(2)}</h3>
`;
}
