window.onscroll = function () {
  if (window.scrollY) {
    document.body.classList.add("pagedown");
  } else {
    document.body.classList.remove("pagedown");
  }
};

const yasan_detail = document.querySelector(".yasan-detail");
const yasan_social = document.querySelector(".yasan-social-media");
const yasan_profile = document.querySelector(".yasan-profile");

const janith_detail = document.querySelector(".janith-detail");
const janith_social = document.querySelector(".janith-social-media");
const janith_profile = document.querySelector(".janith-profile");

const seshan_detail = document.querySelector(".seshan-detail");
const seshan_social = document.querySelector(".seshan-social-media");
const seshan_profile = document.querySelector(".seshan-profile");

const bawan_detail = document.querySelector(".bawan-detail");
const bawan_social = document.querySelector(".bawan-social-media");
const bawan_profile = document.querySelector(".bawan-profile");

yasan_profile.addEventListener("mouseout", () => {
  yasan_detail.style.opacity = "0";
  yasan_social.style.opacity = "0";
});

yasan_profile.addEventListener("mouseover", () => {
  yasan_detail.style.opacity = "1";
  yasan_social.style.opacity = "1";
});

janith_profile.addEventListener("mouseout", () => {
  janith_detail.style.opacity = "0";
  janith_social.style.opacity = "0";
});

janith_profile.addEventListener("mouseover", () => {
  janith_detail.style.opacity = "1";
  janith_social.style.opacity = "1";
});

seshan_profile.addEventListener("mouseout", () => {
  seshan_detail.style.opacity = "0";
  seshan_social.style.opacity = "0";
});

seshan_profile.addEventListener("mouseover", () => {
  seshan_detail.style.opacity = "1";
  seshan_social.style.opacity = "1";
});

bawan_profile.addEventListener("mouseout", () => {
  bawan_detail.style.opacity = "0";
  bawan_social.style.opacity = "0";
});

bawan_profile.addEventListener("mouseover", () => {
  bawan_detail.style.opacity = "1";
  bawan_social.style.opacity = "1";
});
