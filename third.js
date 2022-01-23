document.getElementById("gvthumb1gv").addEventListener("click", imgSlide1);
function imgSlide1() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1627022120/Croma%20Assets/Communication/Mobiles/Images/240335_mwklie.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb2gv").addEventListener("click", imgSlide2);
function imgSlide2() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1629697062/Croma%20Assets/Communication/Mobiles/Images/240335_1_fdbucf.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb3gv").addEventListener("click", imgSlide3);
function imgSlide3() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1629697064/Croma%20Assets/Communication/Mobiles/Images/240335_2_kkce4d.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb4gv").addEventListener("click", imgSlide4);
function imgSlide4() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1627022120/Croma%20Assets/Communication/Mobiles/Images/240335_3_czoa7i.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb5gv").addEventListener("click", imgSlide5);
function imgSlide5() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1627022120/Croma%20Assets/Communication/Mobiles/Images/240335_4_u216pr.png/mxw_1440,f_auto"
    );
}

var arr = JSON.parse(localStorage.getItem("products")) || [];
function addingItem() {
  console.log("here");

  var obj = {
    title: "OnePlus Nord 2 5G (128GB ROM, 8GB RAM, DN2101, Blue Haze)",
    id: "229943",
    price: 29999.0,
    image:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1627022121/Croma%20Assets/Communication/Mobiles/Images/240335_6_ospqym.png/mxw_1440,f_auto",
  };
  arr.push(obj);
  chgCart();
  localStorage.setItem("products", JSON.stringify(arr));
  // window.location.href = "third.html"

}
function chgCart() {
  document.querySelector("#cartValu").innerHTML = arr.length;
}

chgCart();