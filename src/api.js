async function getJoke() {
  let newJoke = "";
  newJoke = await fetch("https://witzapi.de/api/joke/?language=de");
  let result = await newJoke.json();
  //   console.log(result[0].text);
  loadJoke(result[0].text);
}
