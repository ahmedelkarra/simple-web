const getImag = document.querySelectorAll(".allimg img").length;


for (let i = 0; i < getImag; i++) {
  document.querySelectorAll(".allimg img")[i].addEventListener("click", (e) => {
    const getTarget = e.target.className;

    switch (getTarget) {
      case "0":
        document.body.style.background = "gold";
        document.querySelector(".mainimg img").src = "imge/0.png"
        break;
      case "1":
        document.body.style.background = "#BFDAF7";
        document.querySelector(".mainimg img").src = "imge/1.png"
        break;
      case "2":
        document.body.style.background = "#383428";
        document.querySelector(".mainimg img").src = "imge/2.png"
        break;
      case "3":
        document.body.style.background = "#005f56";
        document.querySelector(".mainimg img").src = "imge/3.png"
        break;
      case "4":
        document.body.style.background = "red";
        document.querySelector(".mainimg img").src = "imge/4.png"
        break;

      default:
        break;
    }
  });
}