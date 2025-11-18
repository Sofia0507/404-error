

const ufo = document.querySelector(".ufo");
const beam = document.querySelector(".beam");
document.querySelectorAll(".model-wrap").forEach(wrap => {

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

const beamText = document.querySelector(".beam-text");

document.querySelectorAll(".model-wrap").forEach(wrap => {
  wrap.addEventListener("mouseenter", () => {
    const rect = wrap.getBoundingClientRect();
    ufo.style.left = rect.left + rect.width / 2 + "px";
    ufo.style.top = rect.top - 120 + "px";

    beam.classList.add("active");
    wrap.classList.add("abducting");
    beamText.classList.add("active"); // activa el texto junto con el haz
  });

  wrap.addEventListener("mouseleave", () => {
    beam.classList.remove("active");
    wrap.classList.remove("abducting");
    beamText.classList.remove("active"); // lo apaga al salir
  });
});





    


