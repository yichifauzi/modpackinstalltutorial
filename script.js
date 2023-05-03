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

document.addEventListener("DOMContentLoaded", function() {
  // Get the button
  let topbutton = document.getElementById("topBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topbutton.style.display = "block";
    } else {
      topbutton.style.display = "none";
    }
  }

  // Add event listener to the button
  topbutton.addEventListener("click", topFunction);

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});
