const dropdownHeaders = document.querySelectorAll(".dropdown__header");

dropdownHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    toggleDropdown(header);
  });

  header.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown(header);
    }
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown__header")) {
    closeAllDropdowns();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllDropdowns();
  }
});

function toggleDropdown(header) {
  const clickedDropdown = header.parentElement;
  const clickedMenu = clickedDropdown.querySelector(".dropdown-menu");
  const clickedIcon = header.querySelector(".icon");
  const isOpen = !!clickedMenu.style.maxHeight;

  if (isOpen) {
    closeAllDropdowns();
  } else {
    closeAllDropdowns();
    clickedMenu.style.maxHeight = clickedMenu.scrollHeight + "px";
    clickedIcon.src = "./assets/images/icon-minus.svg";
    clickedIcon.classList.add("rotate");
    clickedIcon.setAttribute("alt", "Collapse FAQ");
    header.setAttribute("aria-expanded", "true");
  }
}

function closeAllDropdowns() {
  dropdownHeaders.forEach((header) => {
    const menu = header.parentElement.querySelector(".dropdown-menu");
    const icon = header.querySelector(".icon");

    menu.style.maxHeight = null;
    icon.src = "./assets/images/icon-plus.svg";
    icon.classList.remove("rotate");
    icon.setAttribute("alt", "Expand FAQ");
    header.setAttribute("aria-expanded", "false");
  });
}
