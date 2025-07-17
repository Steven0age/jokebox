import { useState, createContext, useContext, useEffect } from "react";
import { addToLocalStorage, getJoke, getFromLocalStorage } from "../api/api";
import type { JokeArray } from "../types/joke";

type JokeContextType = {
  currentJoke: string | null;
  loadNewJoke: () => Promise<void>;
  loadSavedJokes: () => void;
  // saveCurrentJoke: () => void;
  savedJokes: JokeArray;
  deleteJoke: (id: number) => void;
};

export const JokeContext = createContext<JokeContextType | undefined>(
  undefined
);

export function JokeProvider({ children }: { children: React.ReactNode }) {
  const [currentJoke, setCurrentJoke] = useState(null);
  const [savedJokes, setSavedJokes] = useState<JokeArray>([]);

  const loadNewJoke = async () => {
    const newLoadedJoke = await getJoke();
    setCurrentJoke(newLoadedJoke);
  };

  // const saveCurrentJoke = () => {
  //   console.log("saveCurrentJoke gefeuert");
  //   console.log("SavedJokes1 =", savedJokes);

  //   let newArray: JokeArray;
  //   newArray = [...savedJokes, { id: 42, joke: currentJoke }];

  //   console.log("SavedJokes2 =", savedJokes);

  //   setSavedJokes(newList);

  //   console.log("SavedJokes3 =", savedJokes);
  //   addToLocalStorage(savedJokes);
  // };

  const loadSavedJokes = () => {
    const getData = getFromLocalStorage();
    if (!getData || getData.length == 0) {
      return;
    } else {
      setSavedJokes(getData);
    }
  };

  const deleteJoke = (id: number) => {
    let index = savedJokes.findIndex((i) => {
      return i.id == id;
    });

    let newArray = [...savedJokes];
    newArray.splice(index, 1);
    setSavedJokes(newArray);
  };

  const value: JokeContextType = {
    currentJoke,
    loadNewJoke,
    loadSavedJokes,
    // saveCurrentJoke,
    savedJokes,
    deleteJoke,
  };

  return <JokeContext.Provider value={value}>{children}</JokeContext.Provider>;
}

export function useJokes() {
  const ctx = useContext(JokeContext);
  if (!ctx) throw new Error("useJokes must be used within <JokeProvider>");
  return ctx;
}
