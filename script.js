// simple fade-in effect
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "0.5s";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 150);
  });
});
function openProject(project) {
  alert("Case study coming soon: " + project);
}
