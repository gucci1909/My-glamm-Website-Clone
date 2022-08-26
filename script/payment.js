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

  var sum = 0;
for (var i = 0; i < Product.length; i++) {
  sum += Product[i].Price;
}
var sum1;
sum1 = sum - (30 / 100) * sum;
display2(sum1);

  function display2(sum1)
  {
    let container = document.getElementById("payment");
    let h1 = document.createElement("h1");
    h1.innerText = "Amount Payable";
  let vtm = document.createElement("p");
  vtm.innerHTML = `&#8377`;
  vtm.className = "vtm";
  let h3 = document.createElement("h3");
  h3.innerText = sum1;
  container.append(h1,vtm,h3);

  }
  display(sum1)
  function display(sum1)
  {
    let container = document.getElementById("bh");
    let h1 = document.createElement("button");
    h1.innerHTML = `Pay &#8377 ${sum1}`;
    h1.addEventListener("click", ()=>{
        button1(main1,main2,main3,main4,5000,10000,15000,20000)

    })
    container.append(h1);

  }

  let id;
let id2;
let id3;
let id4;
let main1=()=>
{
    alert("Your order is being Packed");

}
let main2=()=>
{
    alert("Your order is in transit");
}
let main3=()=>{
    alert("Your order is out for delivery");
}
let main4=()=>{
    alert("Order delivered");
    main5()
}
function main5(){
    window.location.href="./index.html"
}
function button1(main1,main2,main3,main4,delay1,delay2,delay3,delay4)
{
    if(id)
    {
        clearTimeout(id)

    }
    if(id2){
        clearTimeout(id2);

    }
    if(id3)
    {
        clearTimeout(id3);

    }
    if(id4)
    {
        clearTimeout(id4);
        

    }
    id = setTimeout(function(){
        main1()
    },delay1)
    id2 = setTimeout(function(){
        main2()
    },delay2)
    id3 = setTimeout(function(){
        main3()
    },delay3)
    id4 = setTimeout(function(){
        main4()
    },delay4)

}
let address = JSON.parse(localStorage.getItem("Defaultaddress"));
display3(address);
function display3(address) {
  let container = document.getElementById("cont");
  container.innerHTML = null;
  address.forEach(({ Name, Mobile, Email, City, State, Street, Pin, Place, Flat }) => {
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
      h7.innerText = City, State;
      let h8 = document.createElement("p");
      h8.innerText = Pin;
      div.append(h1, h2, h3, h4, h5, h6, h7, h8);
      cont.append(div);
    }
  );
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





