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
let voucherRandom = (min, max) => {
  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  return `${number}%`
}

document.addEventListener("DOMContentLoaded", () => {
  const vouchers = document.querySelectorAll(".voucher");
  vouchers.forEach(vch => {
    return vch.textContent = voucherRandom(5, 50);
  });
})



function getRandomId(min, max, useId) {
  let id;
  do {
    id = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (useId.includes(id));
  useId.push(id);
  return id;
}

async function loadData(image, useIds) {
  try {
    const randomId = getRandomId(52, 7, useIds);
    console.log(randomId);
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${randomId}`
    );

    if (!response.ok) {
      throw new Error("Can not fetch resource");
    }

    const data = await response.json();
    const takeImgURL = data.images[0];
    const takeTitle = data.title;
    const takePrice = data.price;

    const parent = image.closest(".clothes");
    const titleElement = parent.querySelector(".text-title");
    const priceElement = parent.querySelector(".text-price");

    image.src = takeImgURL;
    image.style.display = "block";
    titleElement.textContent = takeTitle;
    priceElement.textContent = takePrice + "$";
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("#imgClothes-content"); // Thay thế '#yourImageId' bằng id thực tế của thẻ img
  const useIds = [];
  images.forEach((image) => loadData(image, useIds));
});
