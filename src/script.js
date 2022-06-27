//Slideshow
const cellImage1 = document.querySelector("#cell-image1");
const cellImage2 = document.querySelector("#cell-image2");
const cellImage3 = document.querySelector("#cell-image3");

function slideShow() {
  const images = [cellImage1, cellImage2, cellImage3];
  let counter = 1;
  const changeSlide = () => {
    //reset display
    images.forEach((image) => image.classList.remove("opacity-100"));
    images.forEach((image) => image.classList.add("opacity-0"));
    images[counter].classList.remove("opacity-0");
    images[counter].classList.add("show-image");
    counter = (counter + 1) % 3;
  };
  setInterval(changeSlide, 3000);
}

slideShow();

// Button only enabled if username and password fields are not empty
const button = document.querySelector("#btn-form");
const userInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

userInput.addEventListener("change", enableSubmit);
passwordInput.addEventListener("change", enableSubmit);

function enableSubmit() {
  console.log(userInput.value, passwordInput.value);
  if (userInput.value !== "" && passwordInput.value !== "") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}
console.log(userInput.value, passwordInput.value);
