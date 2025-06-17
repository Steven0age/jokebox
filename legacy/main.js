import "./styles.scss";
import "./normalize.scss";
import { addToLocalStorage, getJoke, getFromLocalStorage } from "./api";

document.addEventListener("DOMContentLoaded", loadSavedJokes);
//document.addEventListener("DOMContentLoaded", addListenerToDeleteBtn);
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
  let jokeFromLocalStorage = getFromLocalStorage();
  if (!jokeFromLocalStorage || jokeFromLocalStorage.length == 0) {
    savedJokesListEl.innerHTML = `<p class="saved-jokes__placeholder">Noch keine Witze gespeichert.</p>`;
  } else {
    jokesArr = jokeFromLocalStorage;
    displayLoadedJokes();
  }
}

function saveJoke() {
  let doubledJoke = false;
  jokesArr.forEach((i) => {
    if (i.joke == currentJokeEl.innerText) {
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
    <a class="button button--delete" data-joke-id="${i.id}">
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
    </a>
  </div>
`;
    newJokeList += newJoke;
  });

  savedJokesListEl.innerHTML = newJokeList;

  addDeleteBtnListeners();
}

function addDeleteBtnListeners() {
  const buttons = document.querySelectorAll(".button--delete");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteJoke(button.getAttribute("data-joke-id"));
    });
  });
}

// Old Version - Append Listener through target.closest //

// function addListenerToDeleteBtn() {
//   return;
//   const container = document.querySelector(".saved-jokes__jokes-list");
//   container.addEventListener("click", (event) => {
//     let findButton = event.target.closest(".button__delete");

//     if (!findButton) {
//     } else {
//       deleteJoke(findButton.id);
//     }
//   });
// }

function deleteJoke(jokeID) {
  let index = jokesArr.findIndex((i) => {
    return i.id == jokeID;
  });

  jokesArr.splice(index, 1);
  addToLocalStorage(jokesArr);
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
