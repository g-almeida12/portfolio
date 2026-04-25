async function handleFormSubmit(e) {
  e.preventDefault();

  const btn = document.getElementById("form-submit");
  btn.innerText = "Enviando email...";
  btn.disabled = true;

  try {
    const form = document.getElementById("contact-form");
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error("Server error");
    }

    window.location.href = "thank-you.html";
    form.reset();
  } catch (e) {
    const dialog = document.getElementById("modal");
    document.documentElement.style.overflow = "hidden";
    dialog.showModal();

    document.getElementById("go-to-hero").addEventListener("click", () => {
      window.location.href = "/";
      document.documentElement.style.overflow = "visible";
    });
    document.getElementById("close-modal").addEventListener("click", () => {
      dialog.close();
      document.documentElement.style.overflow = "visible";
    });
  } finally {
    btn.innerHTML = "Vamos conversar";
    btn.disabled = false;
  }
}

document
  .getElementById("contact-form")
  .addEventListener("submit", handleFormSubmit);
