//ziel: context, der beim Click des Buttons einen Timer in der Console anzeigt; Wert des Timers ist in UseState gespeichert.

import { useState, createContext, useContext } from "react";
import { getJoke } from "../api/api";

type JokeContextType = {
  actualJoke: string | null;
  loadNewJoke: () => Promise<void>;
};

export const JokeContext = createContext<JokeContextType | undefined>(
  undefined
);

export function JokeProvider({ children }: { children: React.ReactNode }) {
  const [actualJoke, setCurrentJoke] = useState(null);

  const loadNewJoke = async () => {
    const newLoadedJoke = await getJoke();
    setCurrentJoke(newLoadedJoke);
  };

  const value: JokeContextType = {
    actualJoke,
    loadNewJoke,
  };

  return <JokeContext.Provider value={value}>{children}</JokeContext.Provider>;
}

export function useJokes() {
  const ctx = useContext(JokeContext);
  if (!ctx) throw new Error("useJokes must be used within <JokeProvider>");
  return ctx;
}
