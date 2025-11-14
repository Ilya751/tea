(function () {
  const btn = document.querySelector(".menu__btn");
  const menuList = document.querySelector(".menu__list");
  let overlay = document.querySelector(".menu__overlay");

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "menu__overlay";
    document.body.appendChild(overlay);
  }

  function openMenu() {
    menuList.style.display =
      getComputedStyle(menuList).display === "none"
        ? "flex"
        : getComputedStyle(menuList).display;
    if (getComputedStyle(menuList).display === "none")
      menuList.style.display = "flex";

    overlay.classList.add("menu-overlay--active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menuList.style.display = "";
    overlay.classList.remove("menu-overlay--active");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    const isOpen =
      overlay.classList.contains("menu-overlay--active") ||
      getComputedStyle(menuList).display !== "none";
    if (isOpen) closeMenu();
    else openMenu();
  }

  if (btn && menuList && overlay) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMenu();
    });

    overlay.addEventListener("click", function () {
      closeMenu();
    });

    // закрывать меню при клике на любую ссылку внутри меню
    menuList.addEventListener("click", function (e) {
      const link = e.target.closest("a");
      if (link) {
        closeMenu();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 920) {
        closeMenu();
      }
    });
  }
})();
