function handleNavbarLinkClick() {
  document.getElementById("navbar-checkbox").click();
}

document
  .querySelectorAll(".g-navbar-links li")
  .forEach((link) => link.addEventListener("click", handleNavbarLinkClick));
