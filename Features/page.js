// Splide
var splide = new Splide('.splide', {
  type: "loop", 
  autoplay: true,
  interval: 1800,
} );
splide.mount();

var btnSignIn = document.getElementById("signIN");
var btnSignUP = document.getElementById("signUP");

btnSignIn.addEventListener("click", function() {
  window.location.href = "Pages/LoginSingUp/SingIn/SignIn.html#";
})

btnSignUP.addEventListener("click", function() {
  window.location.href = "Pages/LoginSingUp/SingUp/SignUp.html#";
})

// Data
async function loadData() {
  try {
    const randomId = Math.random() * (51 - 23 + 1) + 23;
    const rounderNum = Math.round(randomId);
    console.log(rounderNum);
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${rounderNum}`);

    if(!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const imgContent = document.querySelector("#imgClothes-content");
    
    const data = await response.json();
    const takeImgURL = data.category.image;

    imgContent.src = takeImgURL;
    imgContent.style.display = "block";
    
  } catch (error) {
    console.error(error);
  }
}

loadData();