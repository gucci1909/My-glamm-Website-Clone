let data = JSON.parse(localStorage.getItem("data")) || [];

function append() {
    let count = data.length
    let mybag = document.createElement("p");
    mybag.innerText = `MY BAG (${count})`
    mybag.setAttribute("id", "myBag")
    let final;
    let cont = document.getElementById("cart_box")
    data.forEach((el,index) => {
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

        var array = [null,1, 2, 3, 4, 5]
        var quantity = document.createElement("select");
        quantity.setAttribute("class", "quantity");
        quantity.setAttribute("autoselected","off")
        cont.appendChild(quantity);
        for (var i = 0; i < array.length; i++) {
            let option = document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            quantity.appendChild(option);
            
        }
        quantity.addEventListener("click", () => {
                    selectQuantityFunc(index, quantity.value);
        });

        let final_price = document.createElement("p");
        final_price.setAttribute("class", "final_price");
        final_price.innerText = `₹ ${final}`;

        // let grand = document.getElementById("grandTotal");
        // grand.innerText = `GRAND TOTAL : ₹ ${final_price}`

        let cross = document.createElement("img");
        cross.setAttribute("class", "cross_img")
        cross.src = "./image/cross.png"
        cross.addEventListener("click", function () {
            remove(index)
        })
        div.append(prdct_img, prdct_name, price, quantity, final_price, cross);
        cont.append(div)
    })
}

function remove(i) {
    data.splice(i, 1);
    localStorage.setItem("data", JSON.stringify(data));
    window.location.reload()
}

let selectQuantityFunc = (index, val) => {
    console.log(index, val);
}

append()