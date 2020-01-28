const target = document.querySelector(".header");

window.addEventListener("scroll",function(){
    let offset=window.pageYOffset
    if(offset > 20)
    {
        console.log("reset");
        target.style.height="70px";
    }

    else{
        target.style.height="150px";
    }

    // console.log(offset);
})