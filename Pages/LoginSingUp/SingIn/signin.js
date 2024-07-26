var btnFB = document.getElementById("fb-url");
var btnGG = document.getElementById("gg-url");
var btnINS = document.getElementById("ins-url");

btnFB.addEventListener("click", function () {
  window.location.href = "https://www.facebook.com/?locale=vi_VN";
});

btnGG.addEventListener("click", function () {
  window.location.href =
    "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F%3Fptid%3D19027681%26ptt%3D8%26fpts%3D0&ec=futura_hpp_co_si_001_p&ifkv=AdF4I75FdzUaF_GYNZ51WmiTxB_Vmivf13OFr_Z9GSoqfUs8if9yYTgcN4mwM1xJDWsGdBrZfQYofA&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-2096202274%3A1722010358688453&ddm=0";
});

btnINS.addEventListener("click", function () {
  window.location.href = "https://www.instagram.com/";
});
