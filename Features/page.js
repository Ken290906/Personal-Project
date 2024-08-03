// Splide
var splide = new Splide(".splide", {
  type: "loop",
  autoplay: true,
  interval: 1800,
});
splide.mount();

var btnSignIn = document.getElementById("signIN");
var btnSignUP = document.getElementById("signUP");

btnSignIn.addEventListener("click", function () {
  window.location.href = "Pages/LoginSingUp/SingIn/SignIn.html#";
});

btnSignUP.addEventListener("click", function () {
  window.location.href = "Pages/LoginSingUp/SingUp/SignUp.html#";
});

// Data
function getRandomId(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function loadData(image) {
  try {
    const randomId = getRandomId(13, 36);
    console.log(randomId);
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${randomId}`
    );

    if (!response.ok) {
      throw new Error("Can not fetch resource");
    }

    const data = await response.json();
    const takeImgURL = data.category.image;

    image.src = takeImgURL;
    image.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('img[onload="loadData(this)"]');
  images.forEach((img) => loadData(img));
});
