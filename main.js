const cookie = document.querySelector("#biscoito");
const btnReset = document.querySelector("#newCookie");

const frases = [
  "Se alguém está cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Se o amor estiver contigo, o que acontecerá?"];

cookie.addEventListener("click", (event) => {
  event.preventDefault();

  const randomPhrase = frases[Math.floor(Math.random() * frases.length)];
  document.querySelector("#text").innerText = randomPhrase;
  document.querySelector(".screen1").classList.add("hide");
  document.querySelector(".screen2").classList.remove("hide");
})

btnReset.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".screen1").classList.remove("hide");
  document.querySelector(".screen2").classList.add("hide");
})