export class Game {
  // games: number = 0;
  essais: number = 0;
  words: Array<string> = [];
  constructor(game: any) {
    Object.assign(this, game);
  }
}

export class Stat {
  pseudo: string = "";

  // goalWord: string = "";
  stats: Array<Game> = [];
  constructor(stat: any) {
    Object.assign(this, stat);
  }
}

export function updateStorage(key: string, dataStorage: any) {
  let storage: any = localStorage.getItem("stat");
  let obj: any = JSON.parse(storage);
  localStorage.setItem(key, JSON.stringify(Object.assign(obj, dataStorage)));
}
