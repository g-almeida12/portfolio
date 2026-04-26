function handleNavbarLinkClick() {
  document.getElementById("navbar-checkbox").checked = false;
}

document
  .querySelectorAll(".g-navbar-links li")
  .forEach((link) => link.addEventListener("click", handleNavbarLinkClick));
