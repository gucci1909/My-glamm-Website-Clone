let gotosignup = ()=>{
    window.location.href="./signup.html"
}

function gotocart(){
    window.location.href="./Cart.html";
}

let image =[
    "./image/1.jpg",
    "./image/2.jpg",
    "./image/3.jpg",
    "./image/4.jpg"
]
let address;
let index=0;
let slideshow = ()=>{
    let cont = document.getElementById('slide');

    address = setInterval(()=>{
        if(index == image.length){
            index=0;
        }
        // cont.innerHTML="";
        let img = document.createElement("img");
        img.src = image[index];
        // cont.append(img);
        index++;
    },3000);
};
slideshow();

let previousSilde = ()=>{
    let cont = document.getElementById('slide');
    index--;
    if(index<0){
        index=image.length-1;
    }
    cont.innerHTML="";
    let img = document.createElement("img");
    img.src = image[index];
    // cont.append(img);
}

let nextSlide = ()=>{
    // clearInterval(address);
    
    let cont = document.getElementById('slide');
    if(index == image.length){
        index=0;
    }
    cont.innerHTML="";
    let img = document.createElement("img");
    img.src = image[index];
    // cont.append(img);
    index++;
}

let data = JSON.parse(localStorage.getItem("user"));

// document.getElementById("user-name").innerText = data.value;
