
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

function closeMenu() {
  navigation.classList.remove("is-open");

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");
  menuButton.textContent = "☰";
}

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú" : "Abrir menú"
  );

  menuButton.textContent = isOpen ? "✕" : "☰";
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});


// CARTA CATEGORY SWITCHING

const categoryButtons = document.querySelectorAll(
  ".category-btn"
);

const menuPanels = document.querySelectorAll(
  ".menu-panel"
);

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {

    const selectedCategory = button.dataset.category;

    categoryButtons.forEach((item) => {
      const isSelected =
        item.dataset.category === selectedCategory;

      item.classList.toggle("is-active", isSelected);

      item.setAttribute(
        "aria-pressed",
        String(isSelected)
      );
    });

    menuPanels.forEach((panel) => {
      panel.hidden =
        panel.dataset.category !== selectedCategory;
    });

  });
});
