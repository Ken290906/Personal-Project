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
