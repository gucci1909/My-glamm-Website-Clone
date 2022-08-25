// import { Product } from "./productdata/data.js";

import navbar from "./component/navbar.js"
document.getElementById("navbar").innerHTML=navbar();


import { Product } from "./data.js";

import append from "./component/fetch.js";


let container = document.querySelector(".ashucontainer")
 append(Product.makeup,container)