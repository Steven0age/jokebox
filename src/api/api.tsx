type JokeObject = {
  id: number;
  joke: string;
};
export async function getJoke() {
  let response: Response;
  response = await fetch("https://witzapi.de/api/joke/?language=de");
  const data = await response.json();
  return data[0].text;
}

export function addToLocalStorage(jokesToSave: JokeObject): void {
  localStorage.setItem("reactJokesList", JSON.stringify(jokesToSave));
}

export function getFromLocalStorage(): JokeObject {
  const jokesToLoad = localStorage.getItem("reactJokesList");
  if (!jokesToLoad) {
    return [];
  }
  const UnJSON = JSON.parse(jokesToLoad);
  return UnJSON;
}
