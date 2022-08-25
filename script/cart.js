function append() {
    let data = JSON.parse(localStorage.getItem("data"))
    console.log(data);
    let count = data.length
    let mybag = document.createElement("p");
    mybag.innerText = `MY BAG (${count})`
    mybag.setAttribute("id", "myBag")
    let final;
    let cont = document.getElementById("cart_box")
    data.forEach((el) => {
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

        var array = [1, 2, 3, 4, 5]
        var quantity = document.createElement("select");
        quantity.setAttribute("class", "quantity")
        cont.appendChild(quantity);
        let qunt = 1;
        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = array[i];
            option.text = array[i];
            quantity.appendChild(option);
            // console.log(quantity.value)
            option.onclick = () => {
                // qunt = Number(array[i])
                // console.log(array[i]);
                console.log("object");
            }
            
        }
        // final = (Number(quantity.vlaue) * el.price)
        // console.log(qunt)
        let final_price = document.createElement("p");
        final_price.setAttribute("class", "final_price");
        final_price.innerText = `₹ ${final}`;

        let cross = document.createElement("img");
        cross.setAttribute("class", "cross_img")
        cross.src = "./image/cross.png"

        div.append(prdct_img, prdct_name, price, quantity, final_price, cross);
        cont.append(div)
    })


}

append()