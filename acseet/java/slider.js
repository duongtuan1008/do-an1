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
const imga = document.getElementById("img");
const input = document.getElementById("inputfile");
input.addEventListener("change", () => {
  imga.src = URL.createObjectURL(input.files[0]);
});