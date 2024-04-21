//catch my elements
const rightArrow = document.querySelector(".fa-arrow-right");
const leftArrow = document.querySelector(".fa-arrow-left");
const imagesContainer = document.querySelector(".images");
console.log(imagesContainer);
//add wheel effect
imagesContainer.addEventListener("wheel", (event) => {
  event.preventDefault();
  imagesContainer.style.scrollBehavior = "smooth";
  imagesContainer.scrollLeft += event.deltaY;
});

rightArrow.addEventListener("click", (event) => {
  imagesContainer.style.scrollBehavior = "smooth";
  imagesContainer.scrollLeft += 330;
});
leftArrow.addEventListener("click", (event) => {
  imagesContainer.style.scrollBehavior = "smooth";
  imagesContainer.scrollLeft -= 330;
});
