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

/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const storedTheme = localStorage.getItem('theme')

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = function (theme) {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          localStorage.setItem('theme', theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()