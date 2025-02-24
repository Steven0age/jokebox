import "./styles.scss";
import "./normalize.scss";
import { addToLocalStorage, getJoke } from "./api";

// document.addEventListener("DOMContentLoaded", loadSavedJokes);
document.getElementById("loadJoke").addEventListener("click", loadNewJoke);
document.getElementById("saveJoke").addEventListener("click", saveJoke);
export let currentJokeEl = document.querySelector(".current-joke__joke");

let jokesArr = [];

// function loadSavedJokes() {
//   console.log("loadSavedJokes hat gefeuert");
//   getFromLocalStorage();
// }

async function loadNewJoke() {
  currentJokeEl.innerText = await getJoke();
}

function saveJoke() {
  console.log("saveJoke hat gefeuert");
  // let toSave = [currentJokeEl.innerText];
  // console.log("toSave ist:", toSave);
  addToLocalStorage(currentJokeEl.innerText);
}
