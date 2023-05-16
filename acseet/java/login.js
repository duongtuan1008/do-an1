const inputUsernameRegister = document.querySelector("#Email");
const inputPasswordRegister = document.querySelector("#passR");
const btnRegister = document.querySelector("#dangki");

const namekhach = document.getElementById("name");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    swal("Warning!", "Please do not leave it blank", "warning");
  } else {
    // array user

    const user = {
      namekhach: namekhach.value,
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    localStorage.setItem("user", JSON.stringify(user));
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    // let listkhach = localStorage.setItem("listkhack")
    //   ? JSON.parse(localStorage.getItem("listbank"))
    //   : [];
    // listkhach.push({
    //   namekhach: namekhach,
    // });
    // localStorage.setItem("listkhack", JSON.stringify(listkhach));
    swal("Success", "Sign Up Success", "success");
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
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      window.location.href = "index.html";
    } else {
      swal("Error!", "Login Up Error", "error");
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
