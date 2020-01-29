const target = document.querySelector(".header");
const slider = document.querySelector(".slider");
function handleheight() {
    slider.style.marginTop = target.clientHeight + "px";
}
window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  if (offset > 20) {
    target.style.minHeight = "70px";
    target.removeEventListener("transitionend",handleheight);
  } else {
    target.style.minHeight = "150px";
    slider.style.marginTop = 0+ "px";
    target.addEventListener("transitionend", handleheight);
  }
});


