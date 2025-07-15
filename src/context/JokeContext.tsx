//ziel: context, der beim Click des Buttons einen Timer in der Console anzeigt; Wert des Timers ist in UseState gespeichert.

import { useState, createContext, useContext } from "react";
import { addToLocalStorage, getJoke, getFromLocalStorage } from "../api/api";

type JokeContextType = {
  currentJoke: string | null;
  loadNewJoke: () => Promise<void>;
  loadSavedJokes: () => void;
  saveCurrentJoke: () => void;
};

type jokesFromLS = {
  id: number;
  joke: string;
}[];

export const JokeContext = createContext<JokeContextType | undefined>(
  undefined
);

export function JokeProvider({ children }: { children: React.ReactNode }) {
  const [currentJoke, setCurrentJoke] = useState(null);
  const [savedJokes, setSavedJokes] = useState([]);

  const loadNewJoke = async () => {
    const newLoadedJoke = await getJoke();
    setCurrentJoke(newLoadedJoke);
  };

  const saveCurrentJoke = () => {
    console.log("saveCurrentJoke gefeuert");
    console.log("SavedJokes1 =", savedJokes);
    let newList: jokesFromLS;
    newList = [...savedJokes, { id: 42, joke: currentJoke }];
    console.log("SavedJokes2 =", savedJokes);
    setSavedJokes(newList);
    console.log("SavedJokes3 =", savedJokes);
    addToLocalStorage(savedJokes);
  };

  const loadSavedJokes = () => {
    const getData = getFromLocalStorage();
    console.log("hatgeklappt,getData=", getData);
    if (!getData || getData.length == 0) {
      return;
    } else {
      setSavedJokes(getData);
    }
  };

  const value: JokeContextType = {
    currentJoke: currentJoke,
    loadNewJoke,
    loadSavedJokes,
    saveCurrentJoke,
  };

  return <JokeContext.Provider value={value}>{children}</JokeContext.Provider>;
}

export function useJokes() {
  const ctx = useContext(JokeContext);
  if (!ctx) throw new Error("useJokes must be used within <JokeProvider>");
  return ctx;
}
