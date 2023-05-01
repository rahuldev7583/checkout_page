let initialQuan = 1;

let quantity1 = document.getElementById("quantity1");
quantity1.innerHTML = initialQuan;
let quantity2 = document.getElementById("quantity2");
quantity2.innerHTML = initialQuan;

let price1 = document.getElementById("price1");
price1.innerHTML = "$54.99";
let originalPrice1 = document.getElementById("originalPrice1");
originalPrice1.innerHTML = "$94.99";

let price2 = document.getElementById("price2");
price2.innerHTML = "$74.99";
let originalPrice2 = document.getElementById("originalPrice2");
originalPrice2.innerHTML = "$124.99";

let total = document.getElementById("total");
total.innerHTML = "$" + (54.99 + 74.99 + 19);

function update(upd, num) {
  if (upd === "minus" && num === 1) {
    initialQuan--;
    let newQuan = initialQuan;
    quantity1.innerHTML = newQuan;
    price1.innerHTML = "$" + (newQuan * 54.99).toFixed(2);
    originalPrice1.innerHTML = "$" + (newQuan * 94.99).toFixed(2);
    total.innerHTML = "$" + (newQuan * 54.99 + newQuan * 94.99).toFixed(2);
    // console.log("minus 1 clicked");
  } else if (upd == "plus" && num === 1) {
    initialQuan++;
    let newQuan = initialQuan;
    quantity1.innerHTML = newQuan;
    price1.innerHTML = "$" + (newQuan * 54.99).toFixed(2);
    originalPrice1.innerHTML = "$" + (newQuan * 94.99).toFixed(2);
    total.innerHTML = "$" + (newQuan * 54.99 + newQuan * 94.99).toFixed(2);
    //console.log("plus 1 clicked ");
  } else if (upd === "minus" && num === 2) {
    initialQuan--;
    let newQuan = initialQuan;
    quantity2.innerHTML = newQuan;
    price2.innerHTML = "$" + (newQuan * 74.99).toFixed(2);
    originalPrice2.innerHTML = "$" + (newQuan * 124.99).toFixed(2);
    total.innerHTML = "$" + (newQuan * 74.99 + newQuan * 124.99).toFixed(2);
  } else if (upd == "plus" && num === 2) {
    initialQuan++;
    let newQuan = initialQuan;
    quantity2.innerHTML = newQuan;
    price2.innerHTML = "$" + (newQuan * 74.99).toFixed(2);
    originalPrice2.innerHTML = "$" + (newQuan * 124.99).toFixed(2);
    total.innerHTML = "$" + (newQuan * 74.99 + newQuan * 124.99).toFixed(2);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let button1 = document.getElementById("button1");
  button1.addEventListener("click", () => update("minus", 1));
  let button2 = document.getElementById("button2");
  button2.addEventListener("click", () => update("plus", 1));
  let button3 = document.getElementById("button3");
  button3.addEventListener("click", () => update("minus", 2));
  let button4 = document.getElementById("button4");
  button4.addEventListener("click", () => update("plus", 2));
});
