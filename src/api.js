export async function getJoke() {
  let newJoke = "";
  newJoke = await fetch("https://witzapi.de/api/joke/?language=de");
  let result = await newJoke.json();
  return result[0].text;
}

export let allSavedJokes = ["WITZ1", "WITZ2"];

export function addToLocalStorage(joke) {
  console.log("Function addToLocalStorage hat gefeuert");
  console.log("stringified toSave lautet:", allSavedJokes);
  localStorage.setItem("JokesListe", JSON.stringify(allSavedJokes));
}

// export function getFromLocalStorage() {
//   console.log("getFromLocalStorage hat gefeuert");
//   console.log("IM Local Storrage steht geschrieben:", localStorage.jokesList);
//   const toLoad = localStorage.getItem("jokesList");
//   const UnJSON = JSON.parse(toLoad);
//   console.log("toLoad behinhaltet jetzt:", UnJSON);
// }
