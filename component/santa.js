let navbar = ()=>{
    return `<div id="nav1">
        <div id="nav1_1">
            <img src="https://www.myglamm.com/images/gift.svg" alt="">
            <p>FLAT 199 Store</p>
        </div>
        <h5 style="color:rgb(255, 158, 174)">SHOP NOW</h5>
        <div id="nav1_2">
            <img src="https://www.myglamm.com/images/shop.svg" alt="">
            <p>MyGlamm Store</p>
        </div>
    </div>
    <div id=nav2>
        <a href= "./index.html"><img id="nav2_img1" src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt=""></a>
        <input class="nosubmit" type="search" id="searchProduct" placeholder=" Find Lipstick, Eyeliner, Makeup Tutorial, etc">
        <div id="img09" onclick="gotocart()">
            <img id="nav2_img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKnjjOPjdiZPIpMh7K0xhE5Kxtf3GuE9pnJfWAf4&s" alt="">
        </div>
        <div onclick="gotosignup()">
            <img id="nav2_img3" src="https://www.pngitem.com/pimgs/m/517-5177724_vector-transparent-stock-icon-svg-profile-user-profile.png" alt="">
            <h3 id="user-name"></h3>
        </div>
    </div>
    <div id="nav3">
        <div>
            <p>Home</p>
        </div>
        <div class="fulBox">
            <p class="make" >MAKEUP</p>
            <div  class="fDownBox">
               <div>
                    <p style="color:pink;"><strong>LIPS</strong> </p>
                    <p>Lipstick</p>
                    <p>Liquid Lipstick</p>
                    <p>Hi-Shine Lipstick</p>
                    <p>Matte Lipstick</p>
                    <p>Lip Gloss</p>
                    <p>Lip Liner</p>
                    <p>Lip Balm</p>
                    <p>Lip Glitter</p>
                    <p>Lip Stain</p>
                    <p>Lipstick Set</p>
                    <p>Lip Kit</p>
                    <p>Find Your Lipstick</p>
               </div>
               <div>
                    <p style="color:pink;"><strong>FACE</strong></p>
                    <p>Fixing Powder</p>
                    <p>Primer</p>
                    <p>Concealer</p>
                    <p>Foundation</p>
                    <p>Compact Powder</p>
                    <p>Setting Powder</p>
                    <p>Banana Powder</p>
                    <p>Sindoor</p>
                    <p>Highlighter</p>
                    <p>Blush</p>
                    <p>Bronzer</p>
                    <p>Cheek Stain</p>
               </div>
               <div>
                    <p style="color:pink;"><strong>EYES</strong> </p>
                    <p>Eye Shadow</p>
                    <p>Eyeliner</p>
                    <p>Eyebrows</p>
                    <p>Glitter</p>
                    <p>Mascara</p>
                    <p>Kajal</p>
                    <p>Eye Combos</p>
               </div>
               <div>
                    <p style="color:pink;"><strong>NAILS</strong> </p>
                    <p>Nail Lacquer</p>
                    <p>Nail Polish</p>
                    <p>Matte Nail Polish</p>
                    <p style="color:pink;"><strong>KITS AND COMBOS</strong></p>
                    <p>Makeup Kits</p>
                    <p>Bridal Makeup Kits</p>
                    <p>Makeup Gift Sets</p>
                    <p style="color:pink;"><strong>MAKEUP ACCESSORIES</strong></p>
                    <p>Makeup Brushes</p>
                    <p>Eyeshadow Brushes</p>     
               </div>
            </div>
        </div>
        <div class="boxNav">
            <p class ="hair">HAIR CARE</p>
            <div class="downBox">
                <!-- <p style="color:pink;">HAIR CARE</p> -->
                <p>Shampoo</p>
                <p>Conditioner</p>
                <p>Hair Oil</p>
                <p>Serum</p>
                <p>Hair Mask</p>
                <p>Combos</p>
            </div>
        </div>
        <div class="fulBox">
            <p class="skin">SKIN CARE</p>
            <div  class="fDownBox">
               <div>
                    <p style="color:pink;"><strong>Moisturizer</strong></p>
                    <p>Night Cream</p>
                    <p>Eye Cream</p>
                    <p>Body Lotion</p>
                    <p>Serum</p>
                    <p>Sunscreen</p>
                    <p>Skincare Kits</p>
               </div>
               <div>
                    <p style="color:pink;"><strong>CLEANSING PRODUCTS</strong></p>
                    <p>Cleanser</p>
                    <p>Face Wash</p>
                    <p>Exfoliator & Scrub</p>
               </div>
               <div>
                    <p style="color:pink;"><strong>MASK</strong></p>
                    <p>Sheet Mask</p>
                    <p>Face Pack</p>
               </div>
            </div>
        </div>
        <div class="boxNav">
            <p>SANITIZING CARE</p>
            <div class="downBox">
                <p>Sanitizing Wipes</p>
                <p>Hand Sanitizer</p>
                <p>Shower Gel</p>
                <p>Body Moisturizer</p>
                <p>Soaps</p>
                <p>Hand Care</p>
                <p>Foot Care</p>
                <p>Surface Spray</p>
                <p>Sanitizing Kits</p>
                <p>Body Spray & Mist</p>
                <p>Sanitizing Spray</p>
                <p>Fragrance</p>
            </div>
        </div>
        <div>
            <p>COLLECTION</p>
        </div>
       <div>
           <p>REWARDS</p> 
       </div>
       <div>
            <p>MYGLAMM STUDIO</p>
       </div>
       <div>
           <p>OFFERS</p> 
       </div>
    </div>`;
}

export default navbar;