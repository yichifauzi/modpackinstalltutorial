function showAndHide(clickedButton) {
  var mpinstall = document.getElementById("mpinstall");
  var pltutorial = document.getElementById("pltutorial");

  if (clickedButton === "mpinstall") {
    if (mpinstall.classList.contains("hide")) {
      mpinstall.classList.remove("hide");
      mpinstall.classList.add("show");
      pltutorial.classList.remove("show");
      pltutorial.classList.add("hide");
    } else {
      mpinstall.classList.remove("show");
      mpinstall.classList.add("hide");
    }
  } else if (clickedButton === "pltutorial") {
    if (pltutorial.classList.contains("hide")) {
      pltutorial.classList.remove("hide");
      pltutorial.classList.add("show");
      mpinstall.classList.remove("show");
      mpinstall.classList.add("hide");
    } else {
      pltutorial.classList.remove("show");
      pltutorial.classList.add("hide");
    }
  }
}
