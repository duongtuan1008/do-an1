btnlist.forEach((btn) => {
    console.log(btnlist);
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