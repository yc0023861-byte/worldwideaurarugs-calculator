function calculate() {
let country = document.getElementById("country").value;
    let shippingRate = shippingRates[country] || 0;
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
let totalShipping = chargeable * shippingRate;
document.getElementById("result").innerHTML=
<b>Shipping Rate :</b> $${shippingRate}<br><br>
<b>Courier:</b> ${courier}<br><br>
<b>Total Shipping Cost :</b> $${totalShipping.toFixed(2)}<br><br>
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
function invoice(){

let buyer=document.getElementById("buyer").value;
let country=document.getElementById("country").value;
let value=document.getElementById("value").value;

document.getElementById("invoiceResult").innerHTML=`
<b>Buyer:</b> ${buyer}<br>
<b>Country:</b> ${country}<br>
<b>Invoice Value:</b> $${value}
`;
function packing(){

let buyer=document.getElementById("buyerName").value;
let product=document.getElementById("product").value;
let qty=document.getElementById("qty").value;

document.getElementById("packingResult").innerHTML=`
<b>Buyer :</b> ${buyer}<br>
<b>Product :</b> ${product}<br>
<b>Quantity :</b> ${qty}
`;

}
}
