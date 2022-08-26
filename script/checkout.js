let address = JSON.parse(localStorage.getItem("Defaultaddress"));
display(address);
function display(address) {
  let container = document.getElementById("cont");
  container.innerHTML = null;
  address.forEach(
    ({ Name, Mobile, Email, City, State, Street, Pin, Place, Flat }) => {
      let div = document.createElement("div");
      let h1 = document.createElement("p");
      h1.innerText = `${Name}`;
      let h6 = document.createElement("p");
      h6.innerText = `${Place}`;
      h6.className= "pla"
      let h2 = document.createElement("p");
      h2.innerText = `${Flat} , ${Street} , ${City} , ${State} , ${Pin}`;
      let h7 = document.createElement("p");
      let h3 = document.createElement("p");
      h3.innerText = `Ph no. ${Mobile}`;
      let h4 = document.createElement("p");
      h4.innerText = `${Email}`;
      div.append(h1, h6,h2,h3,h4);
      cont.append(div);
    }
  );
}
let Product = JSON.parse(localStorage.getItem("data"));
display2(Product);
function display2(Product) {
  let container = document.getElementById("cont2");
  container.innerHTML = null;
  display3(Product);

  Product.forEach(({ Image, Brand, Price})=>{
    let con = document.createElement("div");
    con.setAttribute("id", "div1");
    let img = document.createElement("img");
    img.src = Image;
    img.setAttribute("class" , "img123")
    let h4 = document.createElement("h4");
    h4.innerText = Brand;
    h4.className = "bbn";
    let h5 = document.createElement("h4");
    h5.innerText = Price;
    h5.className = "h68";
    let htm = document.createElement("p");
    htm.innerHTML = `&#8377`;
    htm.className = "htm";
    con.append(img, h4,htm,h5);
    container.append(con);
  });
}
document.getElementById("m-auto").addEventListener("click", home);
function home(){
    window.location.href = "./index.html"
}

function display3(Product) {
  let con = document.getElementById("payment");
  let h1 = document.createElement("h3");
  h1.innerText = "Order Summary";
  h1.setAttribute("id", "foo");
  let div1 = document.createElement("div");
  div1.className = "div123";
  let div2 = document.createElement("div");
  div2.className = "div123";
  let div3 = document.createElement("div");
  div3.className = "div123";
  let div4 = document.createElement("div");
  div4.setAttribute("id", "line")
  var sum = 0;
  for (var i = 0; i < Product.length; i++) {
    sum += Product[i].Price;
  }
  var sum1;
  sum1 = sum - (30 / 100) * sum;
  let para2 = document.createElement("h3");
  para2.innerText = "MRP";
  para2.className = "name23";
  let h2 = document.createElement("h3");
  h2.innerHTML = ` &#8377 ${sum}`;
  h2.className = "name2345";
  let h5 = document.createElement("h3");
  h5.innerText = "Discount";
  h5.className = "name23";
  let h4 = document.createElement("h3");
  h4.innerText = "30%";
  h4.className = "name234";
  let h3 = document.createElement("h3");
  h3.innerText = `Amount Payable`;
  h3.className = "name23";
  let pay = document.createElement("h3");
  pay.innerHTML = `&#8377 ${sum1}`;
  pay.className = "pay";
  let div5 = document.createElement("div");
  div5.setAttribute("id","byn5")
  let button = document.createElement("button");
  button.innerText = "Place Order";
  button.addEventListener("click", button1);
  button.className = "byn";
  div5.append(button);
  div1.append(para2,h2);
  div2.append(h5,h4);
  div3.append(h3,pay);
  con.append(h1, div1, div2,div4, div3, div5);
}

function button1() {
  window.location.href = "./payment.html";
}
document.getElementById("SHOPPING").addEventListener("click",shopping);
function shopping(){
  window.location.href = "./Cart.html"
}
document.getElementById("ADDRESS").addEventListener("click",address1);
function address1(){
  window.location.href = "./Address.html";
}
document.getElementById("CHECKOUT").addEventListener("click",checkout);
function checkout(){
  window.location.href = "./checkout.html";
}
document.getElementById("PAYMENT").addEventListener("click",payment);
function payment(){
  window.location.href = "./payment.html"
}

