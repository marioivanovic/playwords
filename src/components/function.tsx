export const nbre_caracteres = (lettre: string, mot: string) => {
  let mots = mot.split("");
  var nbre_de_fois_trouve = 0;

  for (var i = 0; i < mots.length; i++) {
    if (lettre === mots[i]) nbre_de_fois_trouve++;
  }
  return nbre_de_fois_trouve;
};

export const letterInWorl = (lettre: string, word: string) => {
  let response = false;
  if (word.includes(lettre)) {
    response = true;
  }
  return response;
};

export const concatArrayValue = (row: any) => {
  let arrayToString = row[0].value + row[1].value + row[2].value + row[3].value + row[4].value;
  return arrayToString;
};

export const compare = (
  board: any,
  setBoard: any,
  arrayToString: string,
  random: string,
  col: number,
  row: number
) => {
  let valid = false;
  if (arrayToString.toLocaleLowerCase() === random.toLocaleLowerCase()) {
    valid = true;
    let copyBoard = [...board];
    copyBoard[row].forEach((col: any) => {
      col.color = "ionColGreen";
    });
    setBoard(copyBoard);
  } else {
    let copyBoard = [...board];
    let arrayValue = arrayToString.split("");
    let arrayWord = random.split("");
    for (let i = 0; i < arrayValue.length; i++) {
      const strSplit = arrayValue[i];
      if (random.includes(strSplit.toUpperCase())) {
        for (let index = 0; index < arrayWord.length; index++) {
          const worldSplit = arrayWord[index];
          if (index === i) {
            if (
              worldSplit.toLocaleUpperCase() === strSplit.toLocaleUpperCase()
            ) {
              copyBoard[row][i].color = "ionColGreen";
              setBoard(copyBoard);
            } else {
              if (
                worldSplit.toLocaleUpperCase() !==
                  strSplit.toLocaleUpperCase() &&
                random.includes(strSplit.toUpperCase())
              ) {
                let letterRepeatRandom = nbre_caracteres(strSplit, random);
                let nb = 0;

                for (let j = 0; j < arrayValue.length; j++) {
                  const jStr = arrayValue[j];
                  if (strSplit === jStr) {
                    nb++;
                  }
                  if (nb > letterRepeatRandom) {
                    copyBoard[row][i].color = "ionColRed";
                    setBoard(copyBoard);
                  }
                }

                if (nb <= letterRepeatRandom) {
                  copyBoard[row][i].color = "ionColOrange";
                  setBoard(copyBoard);
                } else {
                  copyBoard[row][i].color = "ionColRed";
                  setBoard(copyBoard);
                }
              }
            }
          }
        }
      } else {
        copyBoard[row][i].color = "ionColRed";
        setBoard(copyBoard);
      }
    }
  }
};
