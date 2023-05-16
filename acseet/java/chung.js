var couter = 1;

setInterval(function () {
  document.getElementById("radio" + couter).checked = true;
  couter++;
  if (couter > 3) {
    couter = 1;
  }
}, 2000);

//////////////////////////////////////////////

const notesize = document.querySelector(".note");
function hilesize() {
  var d = document.getElementById("down");
  if (d.className.indexOf("dd") >= 0) {
    d.className = "fa-solid fa-chevron-up ";
    notesize.style.display = "block";
  } else {
    d.className = "dd fa-solid fa-chevron-down";
    notesize.style.display = "none";
  }
}
const notereturn = document.querySelector(".note-return");
function hilereturn() {
  var d1 = document.getElementById("return");
  if (d1.className.indexOf("dd") >= 0) {
    d1.className = "fa-solid fa-chevron-up ";
    notereturn.style.display = "block";
  } else {
    d1.className = "dd fa-solid fa-chevron-down";
    notereturn.style.display = "none";
  }
}
const notemade = document.querySelector(".note-made");

function hilemade() {
  var d2 = document.getElementById("made");
  if (d2.className.indexOf("dd") >= 0) {
    d2.className = "fa-solid fa-chevron-up ";
    notesize.classList.add(".openall");
    notemade.style.display = "block";
  } else {
    d2.className = "dd fa-solid fa-chevron-down";
    notesize.classList.remove(".openall");
    notemade.style.display = "none";
  }
}
//////////////////////////////
function addsp() {
  // validateSize();
  let namesp = document.querySelector(".name-sp").textContent;
  let thongtin = document.querySelector(".thongtinsp").textContent;
  let gia = document.querySelector(".gia").textContent;
  let size = document.getElementsByName("size");
  const anh = document.querySelector(".imgsp");
  const image = anh.getAttribute("src");
  let sizeone = "";
  for (let i = 0; i < size.length; i++) {
    if (size[i].checked == true) {
      sizeone = size[i].value;
    }
  }

  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  list.push({
    image: image,
    namesp: namesp,
    thongtin: thongtin,
    gia: gia,
    sizeone: sizeone,
  });

  localStorage.setItem("list", JSON.stringify(list));
  ree();
}
function ree() {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  let spl = "";
  // '<div class="Cart-product"><div class="cart-item cart-column"><img class="Cart-img" src=""/><span class="Cart-infor"></span></div><span class="cart-price price-product cart-column"></span><div class="cart-quantity cart-quantity-ca cart-column"><inputstyle="width: 50%;text-align: center;line-height: 30px;border-radius: 5px;border: 1px solid #56ccf2;background-color: #eee;color: #333;padding-left: 5px;"id="q2_1"onchange="updateQuantity2(1)"type="number"value="1"/><button class="Cart-xoa" type="button">Xóa</button></div></div>'
  list.map((value, index) => {
    spl +=
      '<div class="Cart-product"><div class="cart-item cart-column"><img class="Cart-img" src="' +
      value.image +
      '"/></div><span class="Cart-infor">' +
      value.namesp +
      '</span><div class="size">size <span>' +
      value.sizeone +
      '</span></div><span class="cart-price price-product cart-column">' +
      value.gia +
      '</span><div class="cart-quantity cart-quantity-ca cart-column"><button class="Cart-xoa" onclick="xoa(' +
      index +
      ')" type="button">Xóa</button></div></div>';
  });
  document.querySelector(".giohang").innerHTML = spl;
  so();
  upimguser()
}
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

function so() {
  let list = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];

  document.querySelector("#so").innerHTML = list.length;
}
document.addEventListener("DOMContentLoaded", ree());
const bigimg = document.querySelector(".img-big");
console.log(bigimg);
const smallimg = document.querySelectorAll(".img-small");
console;
smallimg.forEach(function (imgitem, x) {
  imgitem.addEventListener("click", function () {
    bigimg.src = imgitem.src;
  });
});
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

  var timeout = setTimeout(function () {
    slideshowNext(slideshow, false, true);
  }, slideshowDuration);

  slideshow.data("timeout", timeout);
});

if ($(".main-content .slideshow").length > 1) {
  $(window).on("scroll", homeSlideshowParallax);
}
const subnav = document.getElementById("subnav");

const menu = document.getElementById("menu");
function hienthi() {
  subnav.classList.toggle("hile");
}
menu.addEventListener("click", hienthi);

function hienthikach() {
  let tk = document.querySelector(".taikhoan");
  var obj = JSON.parse(localStorage.getItem("user"));
  if (!obj) {
    document.querySelector("#khach").innerText = "moi ban dang nhạp ";
  } else {
    document.querySelector(".login").style.display = "none";
    document.querySelector("#khach").innerText = obj.namekhach;
  }
}
document.addEventListener("DOMContentLoaded", hienthikach());
////////////////////////////////////////////////////////////
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