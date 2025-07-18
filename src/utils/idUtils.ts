import type { JokeArray } from "../types/joke";

export function nextFreeID(savedJokes: JokeArray): number {
  let lowestUnusedNumber = -1;

  const existingIDs = savedJokes.map((joke) => joke.id);

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
