function append(data,container){
    container.innerHTML=null;

   data.forEach((el) => {
    let card = document.createElement("div")
     card.setAttribute("id","card");
     card.onclick = ()=>{
      getData(el)
     }

     let img = document.createElement("img")
     img.src=el.image;

     let brand = document.createElement("h3")
     brand.innerText=el.brand;
     brand.setAttribute("id","brand")
    
     let des = document.createElement("h3")
      des.setAttribute("id","des")
     des.innerText=el.description;

     let price = document.createElement("h4") 
     price.setAttribute("id","pric");
     price.innerText=`₹ ${el.price} `;

     let s = document.createElement("h4")
        s.innerText=`₹ ${el.span}`;

     let  imdiv = document.createElement("div")
      imdiv.setAttribute("id","imdiv")
      

    let info = document.createElement("div")
      info.setAttribute("id","info")
      

    let pricdiv = document.createElement("div")
      pricdiv.setAttribute("id","pricdiv")
     


       imdiv.append(img)
       info.append(brand,des)
       pricdiv.append(price)
      card.append(imdiv,info,pricdiv)
      container.append(card)

   })


}

function getData(el){
   let Data = localStorage.setItem("item", JSON.stringify(el));
   window.location.href = "./AddToBag.html"
}

export default append