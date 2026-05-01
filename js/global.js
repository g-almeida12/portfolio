function toggleNavbarAriaAtt() {
  const checkbox = document.getElementById("navbar-checkbox");
  if (!checkbox.checked) {
    checkbox.setAttribute("aria-label", "Abrir menu de navegação");
  } else {
    checkbox.setAttribute("aria-label", "Fechar menu de navegação");
  }

  const menuButton = document.getElementById("menu-button");
  menuButton.setAttribute("aria-expanded", checkbox.checked);
}

function handleNavbarLinkClick(targetId) {
  const checkbox = document.getElementById("navbar-checkbox");
  if (checkbox.checked) {
    checkbox.checked = false;
    toggleNavbarAriaAtt();
  }

  sessionStorage.setItem("target-id", targetId);
}

document
  .querySelectorAll(".g-navbar-links li")
  .forEach((link) =>
    link.addEventListener("click", () =>
      handleNavbarLinkClick(link.dataset.targetId),
    ),
  );

document
  .getElementById("navbar-checkbox")
  .addEventListener("change", toggleNavbarAriaAtt);
