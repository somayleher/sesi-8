const tmbhTgs = document.getElementById("tambah-tugas");
const drpDwn = document.getElementById("drp-dwn");
const newItm = document.getElementById("new-item");
const btn = document.getElementById("click-me");
let clicked = false;
const btnsub = document.getElementById("click");
const sub = document.getElementById("down");
let klik = true;

btnsub.addEventListener("click", function () {
  if (sub.style.display === "none" || sub.style.display === "") {
    sub.style.display = "block";
  } else {
    sub.style.display = "none";
  }
});

btnsub .addEventListener("klik", function () {
  if (klik) {
    btn.querySelector("img").src = "./Arrow - Down 2 copy.png";
    klik = false;
  } else {
    btn.querySelector("img").src = "./Arrow - Up 2.png";
    klik = true;
  }
});

btn.addEventListener("click", function () {
  if (clicked) {
    btn.querySelector("img").src = "./Arrow - Down 2.png";
    clicked = false;
  } else {
    btn.querySelector("img").src = "./Arrow - Up 2 copy.png";
    clicked = true;
  }
});

btn.addEventListener("click", function () {
  if (drpDwn.style.display === "none" || drpDwn.style.display === "") {
    drpDwn.style.display = "block";
  } else {
    drpDwn.style.display = "none";
  }
});

tmbhTgs.addEventListener("click", function () {
  if (newItm.style.display === "none" || newItm.style.display === "") {
    newItm.style.display = "flex";
  } else {
    newItm.style.display = "none";
  }
});