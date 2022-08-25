import { createContext, useState, useEffect } from "react";

import { Plugins } from "@capacitor/core";

export interface Gamer {
  pseudo: string;
  games: number;
  success: number;
  essais: number;
}

export interface Gamers {
  gamers: Gamer[];
}

const { Storage } = Plugins;

export async function saveGamers(gs: Gamer[]) {
  await Storage.set({
    key: "gamers",
    value: JSON.stringify(gs),
  });
}

let GamersContext = createContext({} as Gamers);

function GamersContextProvider(props: { children: React.ReactNode }) {
  const [initialGamer, setInitialGamers] = useState([] as Gamer[]);

  useEffect(() => {
    Promise.resolve(
      Storage.get({ key: "gamers" }).then(
        (result: any) => {
          if (typeof result.value === "string") {
            setInitialGamers(JSON.parse(result.value) as Gamer[]);
          }
        },
        (reason: any) =>
          console.log(
            "Failed to load gamers from storage because of: " + reason
          )
      )
    );
  }, []);

  return (
    <GamersContext.Provider value={{ gamers: initialGamer }}>
      {props.children}
    </GamersContext.Provider>
  );
}

let GamersContextConsumer = GamersContext.Consumer;

export { GamersContext, GamersContextProvider, GamersContextConsumer };
