function append(data,container){
   container.innerhtml=null;

   data.forEach((el) => {
    let card = document.createElement("div")
     card.setAttribute("id","card")

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
     price.innerText=`₹ ${el.price}`;

     let  imdiv = document.createElement("div")
      imdiv.setAttribute("id","imdiv")
        imdiv.append(img)

    let info = document.createElement("div")
      info.setAttribute("id","info")
      info.append(brand,des)

    let pricdiv = document.createElement("div")
      pricdiv.setAttribute("id","pricdiv")
      pricdiv.append(price)

      card.append(imdiv,info,pricdiv)
      container.append(card)


   })


}

export default append