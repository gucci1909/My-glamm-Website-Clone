



let h1=document.getElementById("counter")
    function counter(){
        let i=40;

       let id= setInterval(function(){
            i=i-1;
            h1.innerText=i;
            if(i===0)
            {
                clearInterval(id)
                alert("Otp Expired");
            }
            
             

        },1000)
    }
    counter()
    let data = JSON.parse(localStorage.getItem("user")) ||[];

    let submitdetail = ()=>{

        
        let name= document.getElementById("name").value;
        localStorage.setItem("user",JSON.stringify(name));
        location.href="index.html"

    }