let address = JSON.parse(localStorage.getItem("Defaultaddress"));
display(address)
function display(address)
{
    let container = document.getElementById("cont");
    container.innerHTML = null;
    address.forEach(({Name,Mobile,Email,City,State,Street,Pin,Place,Flat})=>{
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
        h7.innerText = City,State;
        let h8 =document.createElement("p");
        h8.innerText = Pin;
        div.append(h1,h2,h3,h4,h5,h6,h7,h8);
        cont.append(div);




    })
}
let Product =  [{Image: 'https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg', Brand: 'TWIST IT MASCARA', Price: 1250, Description: 'Volumising and Curling Mascara'}
,{Image: 'https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg', Brand: 'TWIST IT MASCARA', Price: 1250, Description: 'Volumising and Curling Mascara'}
,{Image: 'https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg', Brand: 'TWIST IT MASCARA', Price: 1250, Description: 'Volumising and Curling Mascara'}
,{Image: 'https://files.myglamm.com/site-images/800x800/STRBNG-(1).png', Brand: 'MANISH MALHOTRA STROBING CREAM', Price: 1550, Description: 'Versatile Illuminator With A Blend of 3 Hyaluronic Acids'},
{Image: 'https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg', Brand: 'TWIST IT MASCARA', Price: 1250, Description: 'Volumising and Curling Mascara'} ]
// let Product = JSON.parse(localStorage.getItem("data"));
display2(Product);
function display2(Product)
{
    let cont = document.getElementById("cont2");
    cont.innerHTML = null;
    Product.forEach(({image,name,price,details})=>{
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        h1.innerText = `Your Order: - ${Name}`;
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
        h7.innerText = City,State;
        let h8 =document.createElement("p");
        h8.innerText = Pin;
        div.append(h1,h2,h3,h4,h5,h6,h7,h8);
        cont.append(div);


    })


}

let data =  [{Image: 'https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg', Brand: 'TWIST IT MASCARA', Price: 1250, Description: 'Volumising and Curling Mascara'}
,{Image: 'https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg', Brand: 'TWIST IT MASCARA', Price: 1250, Description: 'Volumising and Curling Mascara'}
,{Image: 'https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg', Brand: 'TWIST IT MASCARA', Price: 1250, Description: 'Volumising and Curling Mascara'}
,{Image: 'https://files.myglamm.com/site-images/800x800/STRBNG-(1).png', Brand: 'MANISH MALHOTRA STROBING CREAM', Price: 1550, Description: 'Versatile Illuminator With A Blend of 3 Hyaluronic Acids'},
{Image: 'https://files.myglamm.com/site-images/800x800/Twstr-(1).jpg', Brand: 'TWIST IT MASCARA', Price: 1250, Description: 'Volumising and Curling Mascara'} ]


