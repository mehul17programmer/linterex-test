// const hamburger_menu = document.querySelector(".hamburger-menu");
// const container = document.querySelector(".container");

// hamburger_menu.addEventListener("click", () => {
//   container.classList.toggle("active");
// });

// Text Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if(entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));