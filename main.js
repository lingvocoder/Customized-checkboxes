document.addEventListener("DOMContentLoaded", function () {
  let counters = Array.from(document.getElementsByClassName("text__counter"));
  counters.forEach((counter) => {
    counter.textContent = "280";
  });
});

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

let messages = Array.from(document.getElementsByClassName("limited"));
messages.forEach((msg) => {
  msg.addEventListener("input", function () {
    let counter = msg.nextElementSibling.firstElementChild;
    let limit = 280;
    let res = limit - Number(msg.value.length);
    counter.textContent = String(res);
    if (msg.value.length > 280) {
      counter.classList.add("text__counter_invalid");
      counter.classList.remove("text__counter_valid");
      msg.classList.add("text__validate_fail");
      msg.nextElementSibling.textContent =
        "длина сообщения превышает лимит на:";
      msg.nextElementSibling.insertAdjacentElement("beforeend", counter);
    } else if (msg.value.length === 0) {
      msg.classList.remove("text__validate_fail");
      msg.nextElementSibling.textContent = "максимальная длина сообщения:";
      msg.nextElementSibling.insertAdjacentElement("beforeend", counter);
    } else {
      counter.classList.remove("text__counter_invalid");
      counter.classList.add("text__counter_valid");
      msg.classList.remove("text__validate_fail");
      msg.nextElementSibling.textContent = "максимальная длина сообщения:";
      msg.nextElementSibling.insertAdjacentElement("beforeend", counter);
    }
  });
});
