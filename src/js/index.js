document.addEventListener("DOMContentLoaded", function () {
  var navbarToggle = document.getElementById("navbar-toggle");
  var navUl = document.querySelector("nav ul");

  // Open and close nav
  navbarToggle.addEventListener("click", function () {
    if (navUl.style.display === "block") {
      navUl.style.display = "none";
    } else {
      navUl.style.display = "block";
    }
  });

  // Hamburger toggle
  navbarToggle.addEventListener("click", function () {
    this.classList.toggle("active");
  });

  // If a link has a dropdown, add sub menu toggle
  var navbarLinks = document.querySelectorAll("nav ul li a:not(:only-child)");
  navbarLinks.forEach(function (navbarLink) {
    navbarLink.addEventListener("click", function (e) {
      var navbarDropdown = this.nextElementSibling;
      if (navbarDropdown.style.display === "block") {
        navbarDropdown.style.display = "none";
      } else {
        navbarDropdown.style.display = "block";
      }

      // Close dropdown when select another dropdown
      var otherDropdowns = document.querySelectorAll(
        ".navbar-dropdown:not(:last-child)"
      );
      otherDropdowns.forEach(function (otherDropdown) {
        if (otherDropdown !== navbarDropdown) {
          otherDropdown.style.display = "none";
        }
      });

      e.stopPropagation();
    });
  });

  // Click outside the dropdown will remove the dropdown class
  document.addEventListener("click", function () {
    var navbarDropdowns = document.querySelectorAll(".navbar-dropdown");
    navbarDropdowns.forEach(function (navbarDropdown) {
      navbarDropdown.style.display = "none";
    });
  });
});
