window.onscroll = function () {
  if (window.scrollY) {
    document.body.classList.add("pagedown");
  } else {
    document.body.classList.remove("pagedown");
  }
};
