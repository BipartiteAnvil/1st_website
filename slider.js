const images = document.querySelectorAll(".slider img")

const duration=5000;

let i=0;

const size=images.length;
images[i].style.opacity=1;

function slide(mode)
{
    images[i].style.opacity=0;
    i=(i+1)%size;
    images[i].style.opacity=1;
    
}

setInterval(slide,duration);
