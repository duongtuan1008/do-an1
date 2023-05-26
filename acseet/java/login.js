let inputUsernameRegister = document.querySelector("#Email");
let inputPasswordRegister = document.querySelector("#passR");
const btnRegister = document.querySelector("#dangki");

let namekhach = document.getElementById("name");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  let listkhach = localStorage.getItem("listkhack")
    ? JSON.parse(localStorage.getItem("listkhack"))
    : [];
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    swal("Warning!", "Please do not leave it blank", "warning");
  } else {
    let chucnang = 1; //nếu là 1 thì khi đăng nhapk sẽ là trang chủ còn là 2 thì sẽ là admin

    listkhach.push({
      namekhach: namekhach.value,
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
      chucnang: chucnang,
    });
    localStorage.setItem("listkhack", JSON.stringify(listkhach));
    swal("Success", "Sign Up Success", "success");
    document.querySelector("#name").value = "";
    inputUsernameRegister.value = "";
    inputPasswordRegister.value = "";
  }
});
const inputUsername = document.querySelector("#Email-login");
const inputPassword = document.querySelector("#Pass-login");
const btnLogin = document.querySelector("#dangnhap");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  function checkemali() {
    if (inputUsername.value === "") {
      inputUsername.parentElement.querySelector(".error-message").innerText =
        "Please enter you " + inputUsername.id;
    } else {
      inputUsername.parentElement.querySelector(".error-message").innerText =
        "";
    }
  }
  function checkpass() {
    if (inputPassword.value === "") {
      inputPassword.parentElement.querySelector(".error-message").innerText =
        "Please enter you " + inputPassword.id;
    } else {
      inputPassword.parentElement.querySelector(".error-message").innerText =
        "";
    }
  }
  checkemali();
  checkpass();
  if (inputPassword.value === "" || inputUsername === "") {
  } else {
    let listkhach = localStorage.getItem("listkhack")
      ? JSON.parse(localStorage.getItem("listkhack"))
      : [];
    for (let i = 0; i < listkhach.length; i++) {
      console.log(i);
      console.log(listkhach[i].username);
      if (
        listkhach[i].username === inputUsername.value &&
        listkhach[i].password === inputPassword.value
      ) {
        let soindex = i;
        localStorage.setItem("soindex", JSON.stringify(soindex));
        if (parseInt(listkhach[i].chucnang) == 1) {
          window.location.href = "index.html";
        }
        if (parseInt(listkhach[i].chucnang) == 2) {
          window.location.href = "admin.html";
        }
      }
      // else {
      //   if (inputUsername.value == "admin" && inputPassword.value == "123") {
      //     window.location.href = "admin.html";
      //   } else {
      //     swal("Error!", "Login Up Error", "error");
      //   }
      // }
    }
  }
});

const regisbuttun = document.getElementById("register");
const loginbuttun = document.getElementById("login");
const container = document.getElementById("container");

regisbuttun.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
loginbuttun.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
const Eye = document.querySelector("#eye");
Eye.addEventListener("click", function () {
  var d = document.getElementById("eye");
  const hientai = inputPassword.getAttribute("type");

  if (d.className.indexOf("dd") >= 0) {
    d.className = "fa-solid fa-eye eye";
    inputPassword.setAttribute(
      "type",
      hientai === "password" ? "text" : "password"
    );
  } else {
    d.className = "fa-sharp fa-solid fa-eye-slash eye dd";
    inputPassword.setAttribute(
      "type",
      hientai === "text" ? "password" : "text"
    );
  }
});
const EyeR = document.querySelector("#eyeR");
EyeR.addEventListener("click", function () {
  var d = document.getElementById("eyeR");
  const hientair = inputPasswordRegister.getAttribute("type");

  if (d.className.indexOf("dd") >= 0) {
    d.className = "fa-solid fa-eye eye";
    inputPasswordRegister.setAttribute(
      "type",
      hientair === "password" ? "text" : "password"
    );
  } else {
    d.className = "fa-sharp fa-solid fa-eye-slash eye dd";
    inputPasswordRegister.setAttribute(
      "type",
      hientair === "text" ? "password" : "text"
    );
  }
});
