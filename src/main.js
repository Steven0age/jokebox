import "./styles.scss";
import "./normalize.scss";
import { addToLocalStorage, getJoke, getFromLocalStorage } from "./api";

document.addEventListener("DOMContentLoaded", loadSavedJokes);
document.getElementById("loadJoke").addEventListener("click", loadNewJoke);
document.getElementById("saveJoke").addEventListener("click", saveJoke);

let currentJokeEl = document.querySelector(".current-joke__joke");
let savedJokesListEl = document.querySelector(".saved-jokes__jokes-list");
let buttonEl = document.querySelector("#saveJoke");

let jokesArr = [];

async function loadNewJoke() {
  currentJokeEl.innerText = await getJoke();
  buttonEl.classList.remove("button--disabled");
}

function loadSavedJokes() {
  if (!getFromLocalStorage()) {
    return;
  }
  jokesArr = getFromLocalStorage();
  displayLoadedJokes();
}

function saveJoke() {
  let doubledJoke = false;
  jokesArr.forEach((i) => {
    if (i == currentJokeEl.innerText) {
      doubledJoke = true;
      alert("Nicht möglich - Du hast diesen Witz bereits gespeichert");
    }
  });

  if (!doubledJoke) {
    let freeId = nextFreeID();
    jokesArr.push({ id: freeId, joke: currentJokeEl.innerText });
    addToLocalStorage(jokesArr);
    displayLoadedJokes();
  }
}

function displayLoadedJokes() {
  let newJokeList = "";
  jokesArr.forEach((i) => {
    const newJoke = `
  <div class="single-joke">
    <p class="single-joke__text">
      ${i.joke}
    </p>
    <p id="${i.id}" class="button__delete">
      <svg
        class="single-joke__icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
        />
      </svg>
    </p>
  </div>
`;
    newJokeList += newJoke;
  });
  savedJokesListEl.innerHTML = newJokeList;
  addListenerToDeleteBtn();
}

function addListenerToDeleteBtn() {
  let element = document.querySelectorAll(".button_delete");
  console.log("element beinhaltet jetzt: ", element);
  // element.forEach((i) => {
  //   element.addEventListener("click", btnClicked);
  // });

  // let element = document.getElementsById("");
  // element.addEventListener("click", deleteJoke);
}

function btnClicked() {
  alert("BTN Clicked");
}

function deleteJoke(jokeID) {
  let index = jokesArr.findIndex((i) => {
    i.id = jokeID;
  });
  jokesArr.splice(index, 1);
  saveJoke();
  loadSavedJokes();
  displayLoadedJokes();
}

function nextFreeID() {
  let lowestUnusedNumber = -1;

  const existingIDs = jokesArr.map((joke) => joke.id);

  if (existingIDs.length === 0) {
    lowestUnusedNumber = 1;
    return lowestUnusedNumber;
  }

  existingIDs.sort((a, b) => a - b);

  for (let i = 0; i < existingIDs.length; ++i) {
    if (existingIDs[i] != i + 1) {
      lowestUnusedNumber = i + 1;
      break;
    }
  }

  if (lowestUnusedNumber == -1) {
    lowestUnusedNumber = existingIDs[existingIDs.length - 1] + 1;
  }

  return lowestUnusedNumber;
}
