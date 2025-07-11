//ziel: context, der beim Click des Buttons einen Timer in der Console anzeigt; Wert des Timers ist in UseState gespeichert.

import { useState, createContext, useContext } from "react";

type JokeContextType = {
  count: number;
  updateCount: React.Dispatch<number>;
};

export const JokeContext = createContext<JokeContextType>({
  count: 0,
  updateCount: () => {},
});

export function JokeProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log(count);
  };

  const value: JokeContextType = { count, updateCount };

  return <JokeContext.Provider value={value}>{children}</JokeContext.Provider>;
}

export function useJokes() {
  const ctx = useContext(JokeContext);
  if (!ctx) throw new Error("useJokes must be used within <JokeProvider>");
  return ctx;
}
