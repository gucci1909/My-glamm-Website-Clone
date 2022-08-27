let data = JSON.parse(localStorage.getItem("data"));

if (data.length === 0) {
    let p = document.createElement("p");
    p.setAttribute("id", "msg")
    p.innerText = "YOUR BAG IS EMPTY NOW...!!"
    let cont = document.getElementById("cart_box")
    cont.append(p)
}
append(data);
function append(data){
    let count = data.length
    let mybag = document.createElement("p");
    mybag.innerText = `MY BAG (${count})`
    mybag.setAttribute("id", "myBag")
    let final;
    let cont = document.getElementById("cart_box")
    data.forEach((el, index) => {
        console.log(el)
        let div = document.createElement("div");
        div.setAttribute("class", "prdct_card");

        let prdct_img = document.createElement("img");
        prdct_img.setAttribute("class", "prdct_img");
        prdct_img.src = el.Image;

        let prdct_name = document.createElement("p");
        prdct_name.setAttribute("class", "prdct_name");
        prdct_name.innerText = el.Brand;

        let price = document.createElement("p");
        price.setAttribute("class", "price");
        price.innerText = `₹ ${el.Price}`;

        let cross = document.createElement("img");
        cross.setAttribute("class", "cross_img")
        cross.src = "./image/cross.png"
        cross.addEventListener("click", function () {
            remove(index)
        })
        div.append(prdct_img, prdct_name, price, cross);
        cont.append(div)
    })
}

function remove(i) {
    data.splice(i, 1);
    localStorage.setItem("data", JSON.stringify(data));
    window.location.reload()
}
let sum = 0;
for (var i = 0; i < data.length; i++) {
    sum += Number(data[i].Price)
}
function fun324(sum) {
    let res = document.getElementById("grandTotal");
    res.innerText = `GRAND TOTAL : ₹ ${sum}`;
}
fun324(sum);

let btn = document.getElementById("checkout_btn");
btn.onclick = () => {
    window.location.href = "./Address.html"
}
