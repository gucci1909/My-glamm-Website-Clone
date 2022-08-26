// import { Product } from "./productdata/data.js";

import navbar from  "../component/santa.js"
document.getElementById("navbar").innerHTML=navbar();


import { Product , sortingdata } from "./data.js";

import append from "../component/fetch.js";


let container = document.querySelector("#ashucontainer")
let sorting = document.getElementById("sort").addEventListener("change",sort);
//    container.innerHTML=null;

 append(Product.makeup,container)
 
 let make = document.querySelector(".make").addEventListener("click", () => {
  document.querySelector("#ashubigbox>h6").innerText="HOME / MAKEUP"
    document.querySelector("#ashubigbox>h2").innerText="MAKEUP"
    append(Product.makeup,container)
 })



 let hair = document.querySelector(".hair").addEventListener("click", () => {
  document.querySelector("#ashubigbox>h6").innerText="HOME / HAIRCARE"
    document.querySelector("#ashubigbox>h2").innerText="HAIR CARE"
    append(Product.hair,container)
 })

 
 let Skin = document.querySelector(".skin").addEventListener("click", () => {
  document.querySelector("#ashubigbox>h6").innerText="HOME / SKINCARE"
    document.querySelector("#ashubigbox>h2").innerText="SKIN CARE"
    append(Product.skincare,container)
 })


//  -------------------------sorting ----------------------------- //

function sort (){
    let value = document.getElementById("sort").value;
    let text = document.querySelector("#ashubigbox>h2").innerText;
    
    if(text === "MAKEUP"){
      if(value === "HTL"){
        Product.makeup.sort((a,b) =>{
          return +b.price - Number(a.price)
        });
         append(Product.makeup , container);
      }
      if(value === "LTH"){
        Product.makeup.sort((a,b) =>{
          return +a.price - Number(b.price)
        });
         append(Product.makeup , container);
      }
    } 
  
    // --------
    else  if(text === "HAIR CARE"){
      if(value === "HTL"){
        Product.hair.sort((a,b) =>{
          return +b.price - Number(a.price)
        });
         append(Product.hair , container);
      }
      if(value === "LTH"){
        Product.hair.sort((a,b) =>{
          return +a.price - Number(b.price)
        });
         append(Product.hair , container);
      }
    }
    
    // -----------
    else  if(text ==="SKIN CARE"){
      if(value === "HTL"){
        Product.skincare.sort((a,b) =>{
          return +b.price - Number(a.price)
        });
        append(Product.skincare ,container)
      }
      if(value === "LTH"){
        Product.skincare.sort((a,b) =>{
          return +a.price - Number(b.price)
        });
        append(Product.skincare ,container)
       }

    }
  
    
  }
  
  
  