let address = JSON.parse(localStorage.getItem("Defaultaddress"));
display(address);
function display(address) {
  let container = document.getElementById("cont");
  container.innerHTML = null;
  address.forEach(
    ({ Name, Mobile, Email, City, State, Street, Pin, Place, Flat }) => {
      let div = document.createElement("div");
      let h1 = document.createElement("h1");
      h1.innerText = `Your Address : - ${Name}`;
      let h2 = document.createElement("h2");
      h2.innerText = Mobile;
      let h3 = document.createElement("h1");
      h3.innerText = Email;
      let h4 = document.createElement("p");
      h4.innerText = Flat;
      let h5 = document.createElement("p");
      h5.innerText = Street;
      let h6 = document.createElement("p");
      h6.innerText = Place;
      let h7 = document.createElement("p");
      (h7.innerText = City), State;
      let h8 = document.createElement("p");
      h8.innerText = Pin;
      div.append(h1, h2, h3, h4, h5, h6, h7, h8);
      cont.append(div);
    }
  );
}
let Product = [
  {
    Image: "https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg",
    Brand: "TWIST IT MASCARA",
    Price: 1250,
    Description: "Volumising and Curling Mascara",
  },
  {
    Image: "https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg",
    Brand: "TWIST IT MASCARA",
    Price: 1250,
    Description: "Volumising and Curling Mascara",
  },
  {
    Image: "https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg",
    Brand: "TWIST IT MASCARA",
    Price: 1250,
    Description: "Volumising and Curling Mascara",
  },
  {
    Image: "https://files.myglamm.com/site-images/800x800/STRBNG-(1).png",
    Brand: "MANISH MALHOTRA STROBING CREAM",
    Price: 1550,
    Description: "Versatile Illuminator With A Blend of 3 Hyaluronic Acids",
  },
  {
    Image: "https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg",
    Brand: "TWIST IT MASCARA",
    Price: 1250,
    Description: "Volumising and Curling Mascara",
  },
];
// let Product = JSON.parse(localStorage.getItem("data"));
display2(Product);
function display2(Product) {
  let container = document.getElementById("cont2");
  container.innerHTML = null;

  Product.forEach(({ Image, Brand, Price, Description })=>{
    let con = document.createElement("div");
    con.setAttribute("id", "div1");
    let img = document.createElement("img");
    img.src = Image;
    let h4 = document.createElement("h4");
    h4.innerText = Brand;
    h4.className = "bbn";
    let h5 = document.createElement("h4");
    h5.innerText = Price;
    h5.className = "h68";
    let p1 = document.createElement("p");
    p1.innerText = "M.R.P";
    p1.className = "pr";
    let htm = document.createElement("p");
    htm.innerHTML = `&#8377`;
    htm.className = "htm";
    let cat = document.createElement("p");
    cat.innerText = Description;
    cat.className = "cat";
    con.append(img, h4, h5, p1, htm, cat);
    container.append(con);
  });
}
document.getElementById("m-auto").addEventListener("click", home);
function home(){
    window.location.href = "./index.html"
}
display3(Product);
function display3(Product) {
  let con = document.getElementById("payment");
  let h1 = document.createElement("h3");
  h1.innerText = "Payment Details";
  h1.setAttribute("id", "foo");
  var sum = 0;
  for (var i = 0; i < Product.length; i++) {
    sum += Product[i].Price;
  }
  var sum1;
  sum1 = sum - (30 / 100) * sum;
  let vtm = document.createElement("p");
  vtm.innerHTML = `&#8377`;
  vtm.className = "vtm";
  let para = document.createElement("h3");
  para.innerText = "MRP Total";
  para.setAttribute("id", "mr");
  let para2 = document.createElement("h3");
  para2.innerText = "Total Amount";
  para2.className = "name23";
  let h2 = document.createElement("h3");
  h2.innerText = `${sum}`;
  h2.className = "no";
  let h5 = document.createElement("h3");
  h5.innerText = "Discount";
  h5.className = "h68";
  let htm = document.createElement("p");
  htm.innerHTML = `&#8377`;
  htm.className = "htm";
  let h4 = document.createElement("h3");
  h4.innerText = "30%";
  h4.className = "h89";
  let stm = document.createElement("p");
  stm.innerHTML = `&#8377`;
  stm.className = "stm";
  let h3 = document.createElement("h3");
  h3.innerText = `Payable Amount`;
  h3.className = "no1";
  let pay = document.createElement("h3");
  pay.innerText = `${sum1}`;
  pay.className = "pay";
  let button = document.createElement("button");
  button.innerText = "Place Order";
  button.addEventListener("click", button1);
  button.className = "byn";
  con.append(h1, vtm, para, para2, h2, h5, htm, h4, stm, h3, pay, button);
}

function button1() {
  window.location.href = "./payment.html";
}
