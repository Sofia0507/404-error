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




    


