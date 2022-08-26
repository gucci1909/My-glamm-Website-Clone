import navbar from "../component/navbar.js"


let nav = document.getElementById("bagPageNAv");
nav.innerHTML = navbar()
let overview_btn = () => {
    let btn1 = document.getElementById("btn1");
    btn1.onclick = () => {
        btn1.style.borderBottom = "3px solid"
        btn2.style.borderBottom = "none"
        btn3.style.borderBottom = "none"
        btn4.style.borderBottom = "none"
        let one = document.getElementById("one")
        one.style.display = "block"
        let two = document.getElementById("two")
        two.style.display = "none"
        let three = document.getElementById("three")
        three.style.display = "none"
        let four = document.getElementById("four")
        four.style.display = "none"
    }
    let btn2 = document.getElementById("btn2");
    btn2.onclick = () => {
        btn1.style.borderBottom = "none"
        btn2.style.borderBottom = "3px solid"
        btn3.style.borderBottom = "none"
        btn4.style.borderBottom = "none"
        let one = document.getElementById("one")
        one.style.display = "none"
        let two = document.getElementById("two")
        two.style.display = "block"
        let three = document.getElementById("three")
        three.style.display = "none"
        let four = document.getElementById("four")
        four.style.display = "none"
    }
    let btn3 = document.getElementById("btn3");
    btn3.onclick = () => {
        btn1.style.borderBottom = "none"
        btn2.style.borderBottom = "none"
        btn3.style.borderBottom = "3px solid"
        btn4.style.borderBottom = "none"
        let one = document.getElementById("one")
        one.style.display = "none"
        let two = document.getElementById("two")
        two.style.display = "none"
        let three = document.getElementById("three")
        three.style.display = "block"
        let four = document.getElementById("four")
        four.style.display = "none"
    }
    let btn4 = document.getElementById("btn4");
    btn4.onclick = () => {
        btn1.style.borderBottom = "none"
        btn2.style.borderBottom = "none"
        btn3.style.borderBottom = "none"
        btn4.style.borderBottom = "3px solid"
        let one = document.getElementById("one")
        one.style.display = "none"
        let two = document.getElementById("two")
        two.style.display = "none"
        let three = document.getElementById("three")
        three.style.display = "none"
        let four = document.getElementById("four")
        four.style.display = "block"
    }
}
overview_btn()


let append = () => {

    let cont = document.getElementById("container")
    let left_div = document.getElementById("left_div")
    let right_div = document.getElementById("right_div")
    let item = JSON.parse(localStorage.getItem("item"))
    // console.log(item);

    let small_img = document.createElement("div")
    small_img.setAttribute("id","small_img")
    let img1 = document.createElement("img") 
    img1.src = item.Multipleimage[0]
    let img2 = document.createElement("img")
    img2.src = item.Multipleimage[1]
    let img3 = document.createElement("img")
    img3.src = item.Multipleimage[2]
    let img4 = document.createElement("img")
    img4.src = item.Multipleimage[3]
    small_img.append(img1, img2, img3, img4);


    let big_img = document.createElement("div");
    big_img.setAttribute("id", "big_img")
    let big_img1 = document.createElement("img");
    big_img1.src = item.image
    big_img.append(big_img1)

    left_div.append(small_img, big_img)
    
    let brand = document.createElement("h1");
    brand.setAttribute("id", "brand")
    brand.innerText = item.brand

    let desc = document.createElement("h4");
    desc.setAttribute("id", "desc")
    desc.innerText = item.description

    let right_img = document.createElement("img");
    right_img.setAttribute("id", "right_img");
    right_img.src = "./image/glam1.png";

    let price = document.createElement("p");
    price.setAttribute("id", "price");
    price.innerText = `₹ ${Number(item.price) }`
    let product_price = (Number(item.price));

    let mrp = document.createElement("p");
    mrp.setAttribute("id", "mrp");
    mrp.innerText = "(MRP incl. of all taxes)";

    let bag_btn = document.createElement("button");
    bag_btn.setAttribute("id", "bag_button");
    bag_btn.innerText = "Add To Bag"
    bag_btn.onclick = () => {
        addtobag(item)
    }
    let gray_back = document.createElement("p");
    gray_back.setAttribute("id", "gray_back");
    gray_back.innerText = "You will receive cashback worth ₹158 as myglammPOINTS on this purchase"
    
    let glam2_img = document.createElement("img");
    glam2_img.setAttribute("id", "glamm2");
    glam2_img.src = "./image/glamm2.png";
    
    right_div.append(brand, desc, right_img, price, mrp, bag_btn, gray_back, glam2_img);



}
append()

function addtobag(item) {
    console.log(item);
    let image = item.image;
    let brand = item.brand;
    let price = Number(item.price);
    let description = item.description;
    let data = {
        Image: image,
        Brand: brand,
        Price: Number(price),
        Description: description,
    }
    console.log(data);
    let data1 = JSON.parse(localStorage.getItem("data")) || [];
    data1.push(data);
    localStorage.setItem("data", JSON.stringify(data1));

    window.location.href = "./cart.html"
}
