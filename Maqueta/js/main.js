let clase = document.getElementsByClassName("reiniciar");
setInterval(() => {
  for (let i = 0; i < clase.length; i++) {
    const x = clase[i];
    x.classList.remove("progress");
  }
}, 7000);
setInterval(() => {
  for (let i = 0; i < clase.length; i++) {
    const x = clase[i];
    x.classList.add("progress");
  }
}, 7000);
