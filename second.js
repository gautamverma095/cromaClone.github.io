document.getElementById("gvthumb1gv").addEventListener("click", imgSlide1);
function imgSlide1() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641445056/Croma%20Assets/Communication/Mobiles/Images/246699_t12sfb.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb2gv").addEventListener("click", imgSlide2);
function imgSlide2() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641445056/Croma%20Assets/Communication/Mobiles/Images/246699_3_kc7df2.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb3gv").addEventListener("click", imgSlide3);
function imgSlide3() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641445056/Croma%20Assets/Communication/Mobiles/Images/246699_4_jjs8fi.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb4gv").addEventListener("click", imgSlide4);
function imgSlide4() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641445056/Croma%20Assets/Communication/Mobiles/Images/246699_5_a1r8no.png/mxw_1440,f_auto"
    );
}

document.getElementById("gvthumb5gv").addEventListener("click", imgSlide5);
function imgSlide5() {
  document
    .getElementById("gvmainImggv")
    .setAttribute(
      "src",
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641445057/Croma%20Assets/Communication/Mobiles/Images/246699_6_rq56k3.png/mxw_1440,f_auto"
    );
}

var arr = JSON.parse(localStorage.getItem("products")) || [];
function addingItem() {
  console.log("here");

  var obj = {
    title: "Vivo V23 Pro 5G (256GB ROM, 12GB RAM, V2132, Stardust Black)",
    id: "229942",
    price: 43990.0,
    image:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1641445057/Croma%20Assets/Communication/Mobiles/Images/246699_8_k8bhmm.png/mxw_1440,f_auto",
  };
  arr.push(obj);
  chgCart();
  localStorage.setItem("products", JSON.stringify(arr));
  // window.location.href = "second.html"
}

function chgCart() {
  document.querySelector("#cartValu").innerHTML = arr.length;
}

chgCart();