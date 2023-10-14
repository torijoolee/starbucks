const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});
searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      //배지 숨기기
      gsap.to(badgeEl, 0.6, { opacity: 0, display: "none" });
    } else {
      //배지 보이기
      gsap.to(badgeEl, 0.6, { opacity: 1, display: "block" });
    }
  }, 500)
);

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.5,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데보이기
  autoplay: { delay: 3000 },
  loop: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    //페이지 번호 요소 선택지
    clickable: true,
    //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

//범위 랜덤 함수 (소수점2자리까지)
function random(min, max) {
  //toFixed를 통해 반환된 문자데이터를 ,
  //parseFloat를 통해 소수점을 가지는 순자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  //gasp.to(요소,시간,옵션)
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    {
      //옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay),
    }
  );
}
floatingObject(".floating1", 1, 20);
floatingObject(".floating2", 1.5, 30);
floatingObject(".floating3", 0.5, 15);
