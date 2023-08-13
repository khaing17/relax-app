const text = document.querySelector(".text");
const container = document.querySelector(".container");

const start = () => {
  text.textContent = "Breathe In";
  container.className = "container grow";
  setTimeout(() => {
    text.textContent = "Hold";
    setTimeout(() => {
      text.textContent = "Breathe Out";
      container.className = "container shrink";
    }, 1500);
  }, 3000);
};

start();
setInterval(start, 7500);
