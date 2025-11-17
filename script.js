const numStars = 150;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDuration = `${1 + Math.random() * 2}s`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  document.body.appendChild(star);
}


const ufo = document.querySelector(".ufo");
const beam = document.querySelector(".beam");
document.querySelectorAll(.mode-wrap).forEach(wrap=>){
  wrap.addEventListener("mouseenter", () => {
    const rect = wrap.getBoundingClientRect();
    ufo.style.left = rect.left + rect.width / 2 + "px";
    ufo.style.top = rect.top - 120 + "px";

    beam.classList.add("active");
    wrap.classList.add("abducting");
  });

  wrap.addEventListener("mouseleave", () => {
    beam.classList.remove("active");
    wrap.classList.remove("abducting");
  });

});



    


