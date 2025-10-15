const buttonListener = (selectorName) => {
  const buttons = document.querySelector(selectorName);

  buttons.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn || !buttons.contains(btn)) return;

    if (btn.classList.contains("active")) return;

    buttons
      .querySelectorAll("button.active")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
};

buttonListener(".seller__list");
buttonListener(".sale__list");

const brandsNames = Array.from(
  { length: 18 },
  (_, i) => "./img/brands/" + (i + 1) + ".png"
);

const brandsList = document.querySelector(".brands__list");

brandsNames.forEach((b) => {
  const li = document.createElement("li");
  li.classList.add("brands__item");
  const img = document.createElement("img");
  img.classList.add("brands__logo");
  img.setAttribute("src", b);
  li.appendChild(img);

  brandsList.appendChild(li);
});
