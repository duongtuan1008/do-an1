const showMenu = (toggleId, navbarId, bodyId) => {
  const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId);

  if (toggle && navbar) {
    toggle.addEventListener("click", () => {
      navbar.classList.toggle("expander");

      bodypadding.classList.toggle("body-pd");
    });
  }
};
showMenu("nav-toggle", "navbar", "body-pd");

const linkColor = document.querySelectorAll(".nav__link");
function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

const linkCollapse = document.getElementsByClassName("collapse__link");
var i;

for (i = 0; i < linkCollapse.length; i++) {
  linkCollapse[i].addEventListener("click", function () {
    const collapseMenu = this.nextElementSibling;
    collapseMenu.classList.toggle("showCollapse");

    const rotate = collapseMenu.previousElementSibling;
    rotate.classList.toggle("rotate");
  });
}
var bar = document.getElementById("canvas").getContext("2d");
var pie = document.getElementById("chart").getContext("2d");
var barChart = new Chart(bar, {
  type: "bar",
  data: {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4"],
    datasets: [
      {
        label: "Doanh thu (tỷ VNĐ)",
        data: [142, 162, 122, 134],
        backgroundColor: "rgb(160, 216, 179)",
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,

        barPercentage: 0.7,
      },
      {
        label: "Lợi nhuận (tỷ VNĐ)",
        data: [121.6, 144.2, 114.3, 120.9],
        backgroundColor: "rgb(65, 100, 74)",
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        barPercentage: 0.7,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      legend: {
        labels: {
          boxWidth: 15,
          boxHeight: 15,
          useBorderRadius: true,
          borderRadius: 5,
        },
      },
      title: {
        display: true,
        text: "Doanh thu và lợi nhuận năm 2023",
        align: "start",
        font: {
          size: 18,
        },
        padding: 24,
        color: 181818,
      },
    },
  },
});

var pieChart = new Chart(pie, {
  type: "radar",
  data: {
    labels: [
      "Nike Court Vision Low Next Nature",
      "Nike Air Force 1 '07",
      "Nike Air Max 97",
      "adidas superstar",
      "Converse Run Star Hike",
    ],
    datasets: [
      {
        label: "Tỉ lệ (%)",
        data: [80, 90, 99, 67, 87],
        backgroundColor: "rgba(159, 187,  116,  0.2)",
        borderColor: "rgb(83, 113, 136)",
        pointBackgroundColor: "rgba(229, 249, 219,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(229, 249, 219,1)",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      legend: {
        labels: {
          boxWidth: 20,
          boxHeight: 20,
          useBorderRadius: true,
          borderRadius: 5,
        },
      },
      title: {
        display: true,
        text: "Tỉ lệ khách hàng mua sp",
        align: "start",
        font: {
          size: 18,
        },
        padding: 24,
        color: 181818,
      },
    },
  },
});
const fade = () => {
  const loading = document.querySelector(".loader");
  loading.classList.add("fade");
};
window.addEventListener("load", fade);
//////////////////////////////////////////////////////
const imga = document.getElementById("img");
const input = document.getElementById("inputfile");
input.addEventListener("change", function addimg(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", (event) => {
    const result = event.target.result;
    imga.src = result;
    return result;

    // console.log(reader);
  });
  reader.readAsDataURL(file);
});
////////////////////////////////////////////////////////////////
let btnaddproduct = document.getElementById("add-products");
btnaddproduct.addEventListener("click", () => {
  let nameprodcut = document.querySelector("#name").value;
  let moreimg = document.querySelector("#img").src;
  let countadd = document.querySelector("#countadd").value;
  let sale = document.querySelector("#saleadd").value;
  let color = document.querySelector("#color-add").value;
  let information = document.querySelector("#ifn-add").value;
  let more_product = localStorage.getItem("more_product")
    ? JSON.parse(localStorage.getItem("more_product"))
    : [];
  if (
    nameprodcut == "" ||
    countadd == "" ||
    sale == "" ||
    color == "" ||
    information == ""
  ) {
    swal("Warning!", "Please do not leave it blank", "warning");
  } else {
    more_product.push({
      nameprodcut: nameprodcut,
      moreimg: moreimg,
      countadd: countadd,
      sale: sale,
      color: color,
      information: information,
    });
    localStorage.setItem("more_product", JSON.stringify(more_product));
  }
  moreaddd();
});
////////////////////////////////////
function moreaddd() {
  let more_product = localStorage.getItem("more_product")
    ? JSON.parse(localStorage.getItem("more_product"))
    : [];
  let moresp = "";

  more_product.map((value, index) => {
    console.log(value.moreimg);

    moresp +=
      '<div class="moresp"><div class="index">' +
      (index + 1) +
      '</div><div class="produc-img"><img src="' +
      value.moreimg +
      '" alt="" class="imgadd" /></div><div class="nameadd">' +
      value.nameprodcut +
      '</div><div class="priceadd">' +
      value.countadd +
      ' $</div><div class="saleadd">' +
      value.sale +
      ' %</div><div class="coloradd">' +
      value.color +
      '</div><div class="iformationadd">' +
      value.information +
      '</div><div><button class="delete-product" onclick="xoaproductmore(' +
      index +
      ')">delete</button></div><div><button class="edit-product" onclick = "editmore(' +
      index +
      ')">edit</button></div></div> ';
  });

  document.querySelector(".Cartadd").innerHTML = moresp;
  upimguser();
}
document.addEventListener("DOMContentLoaded", moreaddd());
/////////////////////////////////////////////////////////////////////////
function editmore(index) {
  let more_product = localStorage.getItem("more_product")
    ? JSON.parse(localStorage.getItem("more_product"))
    : [];
  document.querySelector("#add-products").style.display = "none";
  document.querySelector("#update-products").style.display = "flex";
  document.querySelector("#name").value = more_product[index].nameprodcut;
  document.querySelector("#index").value = index;
  document.querySelector("#img").src = more_product[index].moreimg;
  document.querySelector("#countadd").value = more_product[index].countadd;
  document.querySelector("#saleadd").value = more_product[index].sale;
  document.querySelector("#color-add").value = more_product[index].color;
  document.querySelector("#ifn-add").value = more_product[index].information;
}
///////////////////////////////////////////////////////////////////////////
function updateproduct() {
  let more_product = localStorage.getItem("more_product")
    ? JSON.parse(localStorage.getItem("more_product"))
    : [];
  let index = document.querySelector("#index").value;
  more_product[index] = {
    nameprodcut: document.querySelector("#name").value,
    moreimg: document.querySelector("#img").src,
    countadd: document.querySelector("#countadd").value,
    sale: document.querySelector("#saleadd").value,
    color: document.querySelector("#color-add").value,
    information: document.querySelector("#ifn-add").value,
  };
  localStorage.setItem("more_product", JSON.stringify(more_product));
  document.querySelector("#name").value = "";
  document.querySelector("#img").src = "/acseet/img/slider/choose.png";
  document.querySelector("#countadd").value = "";
  document.querySelector("#saleadd").value = "";
  document.querySelector("#color-add").value = "";
  document.querySelector("#ifn-add").value = "";
  document.querySelector("#add-products").style.display = "flex";
  document.querySelector("#update-products").style.display = "none";
  moreaddd();
}
function xoaproductmore(index) {
  let more_product = localStorage.getItem("more_product")
    ? JSON.parse(localStorage.getItem("more_product"))
    : [];
  swal(
    "Question!",
    "Are you sure you want to delete this product?",
    "question"
  );
  more_product.splice(index, 1);
  localStorage.setItem("more_product", JSON.stringify(more_product));
  moreaddd();
}
/////////////////////////////////////////////////////////////////////////
function validateForm() {
  const name = document.getElementById("name-management").value;
  const age = document.getElementById("age-management").value;
  const email = document.getElementById("email-management").value;
  const address = document.getElementById("address-management").value;
  //validate value for each field.
  if (name === "") {
    alert("Name is required!");
    return false;
  } else if (age === "") {
    alert("Age is required!");
    return false;
  } else if (age < 1) {
    alert("Age must be a valid number");
  } else if (email === "") {
    alert("Email is required!");
    return false;
  } else if (!email.includes("@")) {
    alert("Invalid email address!");
    return false;
  } else if (address === "") {
    alert("Address is required!");
    return false;
  }
  return true;
}
function showData() {
  let peopleList;
  if (localStorage.getItem("peopleList") === null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  //parse peopleList data then use map to render html
  const html = peopleList.map((element, index) => {
    return `<tr>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.email}</td>
        <td>${element.address}</td>
        <td>
          <button onclick="deleteData(${index})" class="btnacc btn-danger">
            Delete
          </button>
          <button onclick="updateData(${index})" class="btnacc btn-warning m-2">
            Update
          </button>
        </td>
      </tr>`;
  });
  //select tbody ò the id crudTable to render that html
  document.querySelector("#crudTable tbody").innerHTML = html.join();
}
//Load data when the page is loaded
document.onload = showData();

function addData() {
  if (validateForm()) {
    const name = document.getElementById("name-management").value;
    const age = document.getElementById("age-management").value;
    const email = document.getElementById("email-management").value;
    const address = document.getElementById("address-management").value;
    let peopleList;
    if (localStorage.getItem("peopleList") === null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }
    peopleList.push({
      name,
      age,
      email,
      address,
    });
    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    document.getElementById("name-management").value = "";
    document.getElementById("email-management").value = "";
    document.getElementById("address-management").value = "";
    document.getElementById("age-management").value = "";
  }
}

function deleteData(index) {
  let peopleList;
  if (localStorage.getItem("peopleList") === null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  peopleList.splice(index, 1);
  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
}

function updateData(index) {
  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";
  let peopleList;
  if (localStorage.getItem("peopleList") === null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }
  document.getElementById("name-management").value = peopleList[index].name;
  document.getElementById("age-management").value = peopleList[index].age;
  document.getElementById("address-management").value =
    peopleList[index].address;
  document.getElementById("email-management").value = peopleList[index].email;

  document.querySelector("#Update").onclick = function () {
    if (validateForm() === true) {
      peopleList[index].name = document.getElementById("name-management").value;
      peopleList[index].age = document.getElementById("age-management").value;
      peopleList[index].address =
        document.getElementById("address-management").value;
      peopleList[index].email =
        document.getElementById("email-management").value;
      localStorage.setItem("peopleList", JSON.stringify(peopleList));
      showData();

      //clear input value after clicking update button
      document.getElementById("name-management").value = "";
      document.getElementById("email-management").value = "";
      document.getElementById("address-management").value = "";
      document.getElementById("age-management").value = "";
    }
  };
}
const data = document.getElementById("Dashboarda");
const Chartdata = document.getElementById("home");
const Product_Management = document.getElementById("database");
const account_management = document.getElementById("account");
data.addEventListener("click", () => {
  Chartdata.style.display = "block";
  Product_Management.style.display = "none";
  account_management.style.display = "none";
});
document.getElementById("product-more").addEventListener("click", () => {
  Product_Management.style.display = "block";
  account_management.style.display = "none";
  Chartdata.style.display = "none";
});
document.getElementById("management-acc").addEventListener("click", () => {
  Product_Management.style.display = "none";
  account_management.style.display = "block";
  Chartdata.style.display = "none";
});
function upimguser() {
  let imguser = JSON.parse(localStorage.getItem("imguser"));
  let iconuser = document.querySelector("#user");
  let imgboxuser = document.querySelector("#imguser");
  console.log(imguser);
  if (!imguser) {
    imgboxuser.style.display = "none";
    console.log("ok");
  } else {
    iconuser.style.display = "none";
    imgboxuser.src = imguser;
  }
}
