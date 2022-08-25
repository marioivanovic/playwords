import { createContext } from "react";

export interface Gamer {
  pseudo: string;
  games: number;
  success: number;
  essais: number;
}

export interface Gamers {
  gamers: Gamer[];
}

let usersContext = createContext({} as Gamers);

let UsersContextProvider = usersContext.Provider;

let UsersContextConsumer = usersContext.Consumer;

export { usersContext, UsersContextProvider, UsersContextConsumer };
