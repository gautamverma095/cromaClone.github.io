document.getElementById("gvthumb1gv").addEventListener("click", imgSlide1);
function imgSlide1() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606585888/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9009479057438.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb2gv").addEventListener("click", imgSlide2);
function imgSlide2() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1617606106/Croma%20Assets/Computers%20Peripherals/Laptop/Images/230955_1_hnwy0k.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb3gv").addEventListener("click", imgSlide3);
function imgSlide3() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606585893/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9009481744414.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb4gv").addEventListener("click", imgSlide4);
function imgSlide4() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606585896/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9009479581726.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb5gv").addEventListener("click", imgSlide5);
function imgSlide5() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1614580850/Croma%20Assets/Computers%20Peripherals/Laptop/Images/230955_4_zywcxe.png/mxw_1440,f_auto"
    );
}

var arr = JSON.parse(localStorage.getItem("products")) || [];
function addingItem() {
  console.log("here");

  var obj = {
    title: "Apple MacBook Air M1 Chip macOS Big Sur Laptop ",
    id: "229944",
    price: 83900.0,
    image:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606585888/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9009479057438.png/mxw_1440,f_auto",
  };
  arr.push(obj);
  localStorage.setItem("products", JSON.stringify(arr));
  window.location.href = "fourth.html"
}
function chgCart() {
  document.querySelector("#cartValu").innerHTML = arr.length;
}

chgCart();