import type { JokeArray } from "../types/joke";

export async function getJoke() {
  let response: Response;
  response = await fetch("https://witzapi.de/api/joke/?language=de");
  const data = await response.json();
  return data[0].text;
}

export function addToLocalStorage(jokesToSave: JokeArray): void {
  localStorage.setItem("reactJokesList", JSON.stringify(jokesToSave));
}

export function getFromLocalStorage(): JokeArray {
  const jokesToLoad = localStorage.getItem("reactJokesList");
  if (!jokesToLoad) {
    return [];
  }
  const UnJSON = JSON.parse(jokesToLoad) as JokeArray;
  return UnJSON;
}
