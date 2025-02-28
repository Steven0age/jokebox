export async function getJoke() {
  let newJoke = "";
  newJoke = await fetch("https://witzapi.de/api/joke/?language=de");
  let result = await newJoke.json();
  return result[0].text;
}

export function addToLocalStorage(jokesToSave) {
  localStorage.setItem("jokesList", JSON.stringify(jokesToSave));
}

export function getFromLocalStorage() {
  const jokesToLoad = localStorage.getItem("jokesList");
  const UnJSON = JSON.parse(jokesToLoad);
  return UnJSON;
}
