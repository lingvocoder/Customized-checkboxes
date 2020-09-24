function openSidebarMenu() {
  let dropDownBtn = Array.from(
    document.getElementsByClassName("drop-down__btn")
  );

  dropDownBtn.forEach((btn) => {
    btn.addEventListener("click", function (ev) {
      dropDownBtn.forEach((btn) => {
        let btnChildren = Array.from(btn.children);
        let list = btn.nextElementSibling;

        if (btn !== ev.currentTarget) {
          btn.classList.remove("drop-down__btn_active");
          list.classList.remove("drop-down__list_open");

          btnChildren.forEach((child) => {
            switch (child.getAttribute("class")) {
              case "drop-down__icon":
                child.classList.remove("drop-down__icon_close");
                child.classList.add("drop-down__icon_open");
                break;
              default:
                break;
            }
          });
        } else if (btn.classList.contains("drop-down__btn_active")) {
          btn.classList.remove("drop-down__btn_active");
          list.classList.remove("drop-down__list_open");
          btnChildren.forEach((child) => {
            switch (child.getAttribute("class")) {
              case "drop-down__icon":
                child.classList.remove("drop-down__icon_close");
                child.classList.add("drop-down__btn_open");
                break;
              default:
                break;
            }
          });
        } else {
          btn.classList.add("drop-down__btn_active");
          list.classList.add("drop-down__list_open");

          btnChildren.forEach((child) => {
            switch (child.getAttribute("class")) {
              case "drop-down__icon":
                child.classList.add("drop-down__icon_close");
                child.classList.remove("drop-down__icon_open");
                break;
              default:
                break;
            }
          });
        }
      });
    });
  });
}

openSidebarMenu();
