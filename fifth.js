document.getElementById("gvthumb1gv").addEventListener("click", imgSlide1);
function imgSlide1() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1631084878/Croma%20Assets/Entertainment/Television/Images/242944_e5jvij.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb2gv").addEventListener("click", imgSlide2);
function imgSlide2() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1634210298/Croma%20Assets/Entertainment/Television/Images/242944_1_xktvld.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb3gv").addEventListener("click", imgSlide3);
function imgSlide3() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1634210252/Croma%20Assets/Entertainment/Television/Images/242944_2_g45vzm.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb4gv").addEventListener("click", imgSlide4);
function imgSlide4() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1631084878/Croma%20Assets/Entertainment/Television/Images/242944_3_jkorgk.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb5gv").addEventListener("click", imgSlide5);
function imgSlide5() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1631084879/Croma%20Assets/Entertainment/Television/Images/242944_6_na4lzy.png/mxw_1440,f_auto"
    );
}

var arr = JSON.parse(localStorage.getItem("products")) || [];
function addingItem() {
  console.log("here");

  var obj = {
    title:
      "Croma Fire TV 80cm (32 Inch) HD Ready LED Smart TV (Alexa Voice Assistant Remote, CREL7364, Black)",
    id: "229945",
    price: 13999,
    image:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1631084878/Croma%20Assets/Entertainment/Television/Images/242944_e5jvij.png/mxw_1440,f_auto",
  };
  arr.push(obj);
  localStorage.setItem("products", JSON.stringify(arr));
  window.location.href = "fifth.html"
}

function chgCart() {
  document.querySelector("#cartValu").innerHTML = arr.length;
}

chgCart();