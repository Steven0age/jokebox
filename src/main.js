import "./styles.scss";
import "./normalize.scss";

import { getJoke } from "./api";

document.addEventListener("DOMContentLoaded", getJoke);
document.getElementById("loadJoke").addEventListener("click", getJoke);
let currentJokeEl = document.querySelector(".current-joke__joke");

function loadJoke(joke) {
  console.log(joke);
  currentJokeEl.innerHTML = joke;
}
