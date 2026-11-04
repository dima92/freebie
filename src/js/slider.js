export const initSlider = () => {
  const track = document.querySelector(".slider__track");
  const buttons = document.querySelectorAll(".hero__slider-btn");

  if (!track || buttons.length === 0) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetIndex = parseInt(btn.dataset.index, 10);

      track.style.transform = `translateX(-${targetIndex * 100}%)`;

      buttons.forEach((b) => b.classList.remove("hero__slider-btn--active"));
      btn.classList.add("hero__slider-btn--active");
    });
  });
};
