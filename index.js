window.addEventListener('scroll', (e)=>{
    console.log(scrollY);
    if (scrollY > 436) {
        document.querySelector('.title').style.transform = "translateX(0%)"
        document.querySelector(".titleButton").style.transform = "translateY(0%)"
        document.querySelector(".block123").style.transform = "translateX(0%)"
        
    } else {
        document.querySelector('.title').style.transform = "translateX(-100%)"
        document.querySelector('.titleButton').style.transform = "translateY(-110%)"
        document.querySelector(".block123").style.transform = "translateX(110%)"
   
    }

    if (scrollY > 1487) {
        document.querySelector('.blockHead').style.transform = "translateX(0%)"
        document.querySelector('.card1').style.transform = "translateX(0%)"
        document.querySelector('.card2').style.transform = "translateX(0%)"
        document.querySelector('.card3').style.transform = "translateX(0%)"
        document.querySelector('.card4').style.transform = "translateX(0%)"
    } else{
        document.querySelector('.blockHead').style.transform = "translateX(-150%)"
        document.querySelector('.card1').style.transform = "translateX(-100%)"
        document.querySelector('.card2').style.transform = "translateX(100%)"
        document.querySelector('.card3').style.transform = "translateX(-100%)"
        document.querySelector('.card4').style.transform = "translateX(100%)"
    }



    if(scrollY >1879) {
        document.querySelector('.ConsultantText2').style.transform = "translateX(0%)"
        document.querySelector('.ConsultantPhoto').style.transform = "translateX(0%)"
    }else{
        document.querySelector('.ConsultantText2').style.transform = "translateX(150%)"
        document.querySelector('.ConsultantPhoto').style.transform = "translateX(-150%)"
    }
    if(scrollY >2436) {
        document.querySelector('.text0101').style.transform = "translateX(0%)"
        document.querySelector('.text0').style.transform = "translateX(0%)"
    }else{
        document.querySelector('.text0101').style.transform = "translateX(100%)"
        document.querySelector('.text0').style.transform = "translateX(-100%)"
    }
    if(scrollY >2962) {
        document.querySelector('.consultant').style.transform = "translateX(0%)"
    }else{
        document.querySelector('.consultant').style.transform = "translateX(100%)"

    }
    if (scrollY >3409){
        document.querySelector('.text00').style.transform = "translateY(0%)"
    }else{
        document.querySelector('.text00').style.transform = "translateY(100%)"
    }
    if (scrollY >4085){
        document.querySelector('.BlockLogo').style.transform = "translateY(0%)"
    }else{
        document.querySelector('.BlockLogo').style.transform = "translateY(-100%)"
    }
    if (scrollY >4409){
        document.querySelector('.text02').style.transform = "translateX(0%)"
        document.querySelector('.form').style.transform = "translateX(0%)"
    }else{
        document.querySelector('.text02').style.transform = "translateX(-110%)"
        document.querySelector('.form').style.transform = "translateX(110%)"
    }
    
})