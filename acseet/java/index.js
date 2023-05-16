var couter = 1;
setInterval(function () {
  document.getElementById("radio" + couter).checked = true;
  couter++;
  if (couter > 3) {
    couter = 1;
  }
}, 2500);
//////////////////////////////////////////////////////////////

// lọc và sắp xếp
var btnlist = document.querySelectorAll(".arry");
var splist = document.querySelectorAll(".sanpham");
// forEach là để lấy từng phần tử của list
btnlist.forEach((btn) => {
  // console.log(btnlist);
  btn.addEventListener("click", (e) => {
    // getattribute truy xuất đển phần tử
    let type = e.currentTarget.getAttribute("type");
    splist.forEach((sp) => {
      let demo = sp.getAttribute("type");
      console.log(type);

      if (type == "all" || demo == type) {
        sp.classList.remove("hile-sp");
      } else {
        sp.classList.add("hile-sp");
      }
    });
  });
});

function chuyenmau() {
  var dark = document.getElementById("boder");
  dark.classList.toggle("background-dark");
  dark.style.color = "#000";
}

const subnav = document.getElementById("subnav");

const menu = document.getElementById("menu");
function hienthi() {
  subnav.classList.toggle("hile");
}
menu.addEventListener("click", hienthi);

const local = document.querySelector(".local-band");
function hile_nav() {
  local.classList.toggle("hile");
}
// menu .addEventListener("click",()=>{
//   subnav.style.display="block"
// })
let btnbuy = document.querySelectorAll(".buy");
btnbuy.forEach((buy) => {
  buy.addEventListener("click", (event) => {
    var buybtn = event.target;
    // console.log(buy);
    var produc = buybtn.parentElement;
    console.log(produc);
    let namespr = produc.querySelector(".name-sp").textContent;
    let thongtin = produc.querySelector(".thongtinsp").textContent;
    let gia = produc.querySelector(".gia").textContent;
    const anh = produc.querySelector(".imgsp");
    const image = anh.getAttribute("src");
    let sizegg = produc.querySelector(".sizegg").value;
    var soluong = 1;
    let list = localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
    console.log(list);
    var flag = false;

    for (let i = 0; i < list.length; i++) {
      if (list[i].namesp == namespr && list[i].sizeone == sizegg) {
        var cout = list[i].soluong++;
        flag = true;
        break;
      }
    }
    if (flag == false) {
      list.push({
        image: image,
        namesp: namespr,
        thongtin: thongtin,
        gia: gia,
        sizeone: sizegg,
        soluong: soluong,
      });
    }
    localStorage.setItem("list", JSON.stringify(list));

    swal("successful", "successful payment!", "success");
    document.querySelector("#so").innerText = list.length;
    ree();
    hienthikach();
  });
});
function so() {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  document.querySelector("#so").innerText = list.length;
}
///////////////////////////////
function hienthikach() {
  let tk = document.querySelector(".taikhoan");
  var obj = JSON.parse(localStorage.getItem("user"));
  if (!obj) {
    document.querySelector("#khach").innerText = "Sign In";
  } else {
    document.querySelector("#khach").innerText = obj.namekhach;
  }
}
document.addEventListener("DOMContentLoaded", hienthikach());
/////////////////////////////////////////

const fade = () => {
  const loading = document.querySelector(".loader");
  loading.classList.add("fade");
};
window.addEventListener("load", fade);

////////////////////////////////////////
function upimguser() {
  let imguser = JSON.parse(localStorage.getItem("imguser"));
  let iconuser = document.querySelector(".fa-user");
  let imgboxuser = document.querySelector("#imguser")
  console.log(imguser)
  if (!imguser) {
    imgboxuser.style.display="none"
  } else {
    iconuser.style.display = "none";
    imgboxuser.src = imguser
    
  }
}
///////////////////////////////////////
function ree() {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];

  let spl = "";
  if (list.length > 0) {
    list.map((value, index) => {
      spl +=
        '<div class="Cart-product"><div class="cart-item cart-column"><img class="Cart-img" src="' +
        value.image +
        '"/></div><span class="Cart-infor">' +
        value.namesp +
        '</span><div class="size-giohang">size <span>' +
        value.sizeone +
        '</span></div><span class="cart-price price-product cart-column">' +
        value.gia +
        '</span><div class="cart-quantity cart-quantity-ca cart-column"><input class="ipsl" onchange="sum()" style="width: 50%;text-align: center;line-height: 30px;border-radius: 5px;border: 1px solid #56ccf2;background-color: #eee;color: #333;padding-left: 5px;"id="q2_1"onchange="updateQuantity2(1)"type="number"value="' +
        value.soluong +
        '" min="1"/><button class="Cart-xoa" onclick="xoa(' +
        index +
        ')" type="button">Xóa</button></div></div>';
    });
    document.querySelector(".giohang").innerHTML = spl;
    so();
  } else {
    spl += '<div class="Cart-null">Giỏ hàng không có sản phẩm nào!!!</div>';
    document.querySelector(".giohang").innerHTML = spl;
  }
  upimguser();
  // '<div class="Cart-product"><div class="cart-item cart-column"><img class="Cart-img" src=""/><span class="Cart-infor"></span></div><span class="cart-price price-product cart-column"></span><div class="cart-quantity cart-quantity-ca cart-column"><inputstyle="width: 50%;text-align: center;line-height: 30px;border-radius: 5px;border: 1px solid #56ccf2;background-color: #eee;color: #333;padding-left: 5px;"id="q2_1"onchange="updateQuantity2(1)"type="number"value="1"/><button class="Cart-xoa" type="button">Xóa</button></div></div>'
}
document.addEventListener("DOMContentLoaded", ree());

function xoa(index) {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  if (confirm("are you sure??")) {
    list.splice(index, 1);
  }

  localStorage.setItem("list", JSON.stringify(list));
  ree();
}

var bigchat = document.querySelector(".big-chat");
const chat = document.querySelector(".closechat");
chat.addEventListener("click", () => {
  bigchat.style.display = "none";
});
const chatmini = document.querySelector(".chat-mini");
chatmini.addEventListener("click", () => {
  // bigchat.classList.add("hile-chat");
  bigchat.style.display = "flex";
});
////////////////////////////slider show///////////////////////////////
var slideshowDuration = 1000;
var slideshow = $(".main-content .slideshow");

function slideshowSwitch(slideshow, index, auto) {
  if (slideshow.data("wait")) return;

  var slides = slideshow.find(".slide");
  var pages = slideshow.find(".pagination");
  var activeSlide = slides.filter(".is-active");
  var activeSlideImage = activeSlide.find(".image-container");
  var newSlide = slides.eq(index);
  var newSlideImage = newSlide.find(".image-container");
  var newSlideContent = newSlide.find(".slide-content");
  var newSlideElements = newSlide.find(".caption > *");
  if (newSlide.is(activeSlide)) return;

  newSlide.addClass("is-new");
  var timeout = slideshow.data("timeout");
  clearTimeout(timeout);
  slideshow.data("wait", true);
  var transition = slideshow.attr("data-transition");
  if (transition == "fade") {
    newSlide.css({
      display: "block",
      zIndex: 2,
    });
    newSlideImage.css({
      opacity: 0,
    });

    TweenMax.to(newSlideImage, 1, {
      alpha: 1,
      onComplete: function () {
        newSlide.addClass("is-active").removeClass("is-new");
        activeSlide.removeClass("is-active");
        newSlide.css({ display: "", zIndex: "" });
        newSlideImage.css({ opacity: "" });
        slideshow.find(".pagination").trigger("check");
        slideshow.data("wait", false);
        if (auto) {
          timeout = setTimeout(function () {
            slideshowNext(slideshow, false, true);
          }, slideshowDuration);
          slideshow.data("timeout", timeout);
        }
      },
    });
  } else {
    if (newSlide.index() > activeSlide.index()) {
      var newSlideRight = 0;
      var newSlideLeft = "auto";
      var newSlideImageRight = -slideshow.width() / 8;
      var newSlideImageLeft = "auto";
      var newSlideImageToRight = 0;
      var newSlideImageToLeft = "auto";
      var newSlideContentLeft = "auto";
      var newSlideContentRight = 0;
      var activeSlideImageLeft = -slideshow.width() / 4;
    } else {
      var newSlideRight = "";
      var newSlideLeft = 0;
      var newSlideImageRight = "auto";
      var newSlideImageLeft = -slideshow.width() / 8;
      var newSlideImageToRight = "";
      var newSlideImageToLeft = 0;
      var newSlideContentLeft = 0;
      var newSlideContentRight = "auto";
      var activeSlideImageLeft = slideshow.width() / 4;
    }

    newSlide.css({
      display: "block",
      width: 0,
      right: newSlideRight,
      left: newSlideLeft,
      zIndex: 2,
    });

    newSlideImage.css({
      width: slideshow.width(),
      right: newSlideImageRight,
      left: newSlideImageLeft,
    });

    newSlideContent.css({
      width: slideshow.width(),
      left: newSlideContentLeft,
      right: newSlideContentRight,
    });

    activeSlideImage.css({
      left: 0,
    });

    TweenMax.set(newSlideElements, { y: 20, force3D: true });
    TweenMax.to(activeSlideImage, 1, {
      left: activeSlideImageLeft,
      ease: Power3.easeInOut,
    });

    TweenMax.to(newSlide, 1, {
      width: slideshow.width(),
      ease: Power3.easeInOut,
    });

    TweenMax.to(newSlideImage, 1, {
      right: newSlideImageToRight,
      left: newSlideImageToLeft,
      ease: Power3.easeInOut,
    });

    TweenMax.staggerFromTo(
      newSlideElements,
      0.8,
      { alpha: 0, y: 60 },
      { alpha: 1, y: 0, ease: Power3.easeOut, force3D: true, delay: 0.6 },
      0.1,
      function () {
        newSlide.addClass("is-active").removeClass("is-new");
        activeSlide.removeClass("is-active");
        newSlide.css({
          display: "",
          width: "",
          left: "",
          zIndex: "",
        });

        newSlideImage.css({
          width: "",
          right: "",
          left: "",
        });

        newSlideContent.css({
          width: "",
          left: "",
        });

        newSlideElements.css({
          opacity: "",
          transform: "",
        });

        activeSlideImage.css({
          left: "",
        });

        slideshow.find(".pagination").trigger("check");
        slideshow.data("wait", false);
        if (auto) {
          timeout = setTimeout(function () {
            slideshowNext(slideshow, false, true);
          }, slideshowDuration);
          slideshow.data("timeout", timeout);
        }
      }
    );
  }
}

function slideshowNext(slideshow, previous, auto) {
  var slides = slideshow.find(".slide");
  var activeSlide = slides.filter(".is-active");
  var newSlide = null;
  if (previous) {
    newSlide = activeSlide.prev(".slide");
    if (newSlide.length === 0) {
      newSlide = slides.last();
    }
  } else {
    newSlide = activeSlide.next(".slide");
    if (newSlide.length == 0) newSlide = slides.filter(".slide").first();
  }

  slideshowSwitch(slideshow, newSlide.index(), auto);
}

function homeSlideshowParallax() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > windowHeight) return;
  var inner = slideshow.find(".slideshow-inner");
  var newHeight = windowHeight - scrollTop / 2;
  var newTop = scrollTop * 0.8;

  inner.css({
    transform: "translateY(" + newTop + "px)",
    height: newHeight,
  });
}

$(document).ready(function () {
  $(".slide").addClass("is-loaded");

  $(".slideshow .arrows .arrow").on("click", function () {
    slideshowNext($(this).closest(".slideshow"), $(this).hasClass("prev"));
  });

  $(".slideshow .pagination .item").on("click", function () {
    slideshowSwitch($(this).closest(".slideshow"), $(this).index());
  });

  $(".slideshow .pagination").on("check", function () {
    var slideshow = $(this).closest(".slideshow");
    var pages = $(this).find(".item");
    var index = slideshow.find(".slides .is-active").index();
    pages.removeClass("is-active");
    pages.eq(index).addClass("is-active");
  });

  /* Lazyloading
$('.slideshow').each(function(){
  var slideshow=$(this);
  var images=slideshow.find('.image').not('.is-loaded');
  images.on('loaded',function(){
    var image=$(this);
    var slide=image.closest('.slide');
    slide.addClass('is-loaded');
  });
*/

  var timeout = setTimeout(function () {
    slideshowNext(slideshow, false, true);
  }, slideshowDuration);

  slideshow.data("timeout", timeout);
});

if ($(".main-content .slideshow").length > 1) {
  $(window).on("scroll", homeSlideshowParallax);
}

///////////////////////////////////////////funtion search
var searchinput = document.getElementById("searh");
searchinput.addEventListener("input", function (e) {
  if (searchinput.value === "") {
    document.querySelector(".product-search").style.display = "none";
  } else {
    document.querySelector(".product-search").style.display = "block";
    console.log(e.target.value.trim());
    let txtsearch = e.target.value.trim().toLowerCase();
    let listproduc = document.querySelectorAll(".Cart-search");
    listproduc.forEach((item) => {
      if (item.innerText.includes(txtsearch)) {
        console.log(item.innerText.includes(txtsearch));
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  }
});
/////////////////////////////////////////////
// window.addEventListener("DOMContentLoaded",()=>{
//   const imgaes=document.querySelectorAll("img");
//   imgaes.forEach(image=>{
//     new IntersectionObserver((entries,observe)=>{
//       entries.forEach(entry=>{
//         const img=entry.target;
//         const dataSrc=img.getAttribute('data-src')
//         img.setAttribute('src'.dataSrc)
//         img.removeAttribute('datasrc')
//         observe.disconnect()
//       })
//     }).observe(image)
//   })
// })
/////////////////////////////////////////////////////
var quanitlyinput = document.querySelectorAll(".ipsl");
quanitlyinput.forEach((cout, index) => {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  cout.addEventListener("input", (event) => {
    var ipsl = event.target.value;
    console.log(ipsl);
    list[index].soluong = parseInt(ipsl);
    localStorage.setItem("list", JSON.stringify(list));
    so();
  });
});
