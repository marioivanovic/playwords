import {
  IonContent,
  IonHeader,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonButton,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonModal,
  useIonAlert,
  IonAlert,
} from "@ionic/react";
import "./home.css";
import Keyboard from "./../components/keyboard";
import data from "../Data.json";
import { useEffect, useRef, useState } from "react";
import "../components/keyboard.css";
import { IInputCol } from "../components/IInputCol";
import { backspace, refreshCircle } from "ionicons/icons";
import "../components/styles.css";
import AlertIon from "../components/AlertIon";
import ModalInfo from "../components/ModalInfo";
import { Game, updateStorage } from "../utils/stats";

const Home: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const arrayObject = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "B", "M", "N", "V", "C", "Z", "X", "Reset"],
  ];
  const rows = [];
  for (let row = 0; row < 6; row++) {
    let cols = [];
    for (let col = 0; col < 5; col++) {
      cols.push({ key: "", value: "" });
    }
    rows.push(cols);
  }

  let boardDefault = [
    [
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
    ],
    [
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
    ],
    [
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
    ],
    [
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
    ],
    [
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
    ],
    [
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
      { value: "", color: "ioncol" },
    ],
  ];
  const [board, setBoard] = useState([...boardDefault]);
  let datas = data.data;
  const [arrI, setArrI] = useState([...datas]);
  const [press, setPress] = useState("");
  const [random, setRandom] = useState("");
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);

  const [is, setIS] = useState(false);
  const [games, setGames] = useState([]);
  const [essais, setEssais] = useState([]);
  const [words, setWords] = useState([]);

  const gamer = {
    games: games,
    essais: essais,
    words: words,
  };

  let saveGame = () => {
    localStorage.setItem("games", JSON.stringify(gamer));
    localStorage.setItem("essais", JSON.stringify(gamer));
    localStorage.setItem("words", JSON.stringify(gamer));
  };

  const [wordsFind, setWordsFind] = useState([]);
  const [isRefrech, setIsrefrech] = useState(false);
  const [newGame, setNewGame] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [str, setStr] = useState("");
  const [nbrTest, setNbrTest] = useState(0);


  useEffect(() => {
    randomValueFromArray();
  }, [isRefrech]);

  const randomValueFromArray = () => {
    let randomValueIndex = Math.floor(Math.random() * arrI.length);
    let wordOfItemInMyArray = arrI[randomValueIndex];

    arrI.splice(randomValueIndex, 1);
    setRandom(wordOfItemInMyArray);
  };

  const handleClick = (event: any) => {
    let currentMatrice = [...board];
    if (col < 5) {
      currentMatrice[row][col].value = event.target.innerText;
    }
    if (col < 5) {
      setCol((prev) => prev + 1);
    }

    setBoard(currentMatrice);
    boardDefault = currentMatrice;
    setPress(event.target.innerText);
  };

  const prev = () => {
    let copy = [...board];
    if (col === 5) {
      copy[row][col - 1].value = "";
      setCol((prev) => prev - 1);
    } else {
      if (col > 0) {
        copy[row][col - 1].value = "";
        setCol((prev) => prev - 1);
        setBoard(copy);
      }
      if (col === 0) {
        console.log("ici", col);
      }
    }
  };

  const nbre_caracteres = (lettre: string, mot: string) => {
    let mots = mot.split("");
    var nbre_de_fois_trouve = 0;

    for (var i = 0; i < mots.length; i++) {
      if (lettre === mots[i]) nbre_de_fois_trouve++;
    }
    return nbre_de_fois_trouve;
  };

  const compare = () => {
    let valid = false;

    let arrayToString =
      board[row][0].value +
      board[row][1].value +
      board[row][2].value +
      board[row][3].value +
      board[row][4].value;

    if (arrayToString.toLocaleLowerCase() === random.toLocaleLowerCase()) {
      valid = true;
      let copyBoard = [...board];

      copyBoard[row].forEach((col) => {
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
    var essaisCount = nbrTest + 1;
    var game = new Game({ essais: essaisCount, words: random });
    setNbrTest(essaisCount);

    let statStorage: any = localStorage.getItem("stat");
    let statParse: any = JSON.parse(statStorage);
    let stats: any = statParse.stats;

    stats.push(game);
    updateStorage("stat", { stats: stats });

    let result = "";

    if (nbrTest === 5) {
      if (valid) {

        result = "Felicitations c'etait moins une !!!!!";
        
      } else {
        result = "Dommage, vous avez perdu, retentez votre chance !";
      }
      setIsShow(true);
      setIsrefrech(true);
      setNewGame(true);
    }

    if (nbrTest < 5) {
      if (valid) {
        result = "Felicitations !!!!!";
        setNewGame(true);
      } else {
        result = "Dommage, loose Vous pouvez reessayez encore";
      }
      setIsShow(true);
    }

    setStr(result);
    if (col === 5) {
      setRow(row + 1);
      setCol(0);
    }
  };


  const reset = () => {
    setBoard(boardDefault);
    setCol(0);
    setRow(0);
    randomValueFromArray();
    setNewGame(false);
    setStr("");
    setNbrTest(0);
  };

  const Ionchange = () => {};

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">A vous de jouer</IonTitle>
          </IonToolbar>
        </IonHeader>

        <h1 className="ioncol">Bonne Chance !!!</h1>


        <IonAlert
          isOpen={isShow}
          onDidDismiss={() => setIsShow(false)}
          header="Alert Infos"
          subHeader="Important message"
          message={str}
          buttons={["OK"]}
        />

        <IonGrid>
          <h1 className="ioncol">Le mot ?? trouver est : {random}</h1>
          <IonButton color={"medium"} onClick={reset}>
            <IonIcon className="keyboard-button" icon={refreshCircle} />
          </IonButton>
          {board.length > 0
            ? board.map((row, index) => (
                <IonRow className="ion-row" key={index} id={"id-" + index}>
                  {row.length > 0
                    ? row.map((col, i) => (
                        <div className={col.color} key={i}>
                          <IInputCol
                            key={i}
                            id={"id-" + index + "-" + i}
                            value={col.value}
                            onIonChange={Ionchange}
                          />
                        </div>
                      ))
                    : null}
                </IonRow>
              ))
            : null}
        </IonGrid>

        {/* clavier */}
        <div className="containerPartie">
          <IonButton
            onClick={compare}
            color="success"
            className="keyboard-button compare2"
          >
            Enter
          </IonButton>
          <IonButton
            className=" keyboard-button deletePartie"
            color="medium"
            onClick={reset}
          >
            {newGame ? "Nouvelle Partie" : "Recommencer la partie"}
          </IonButton>
          <IonButton color="light" onClick={prev} className="delete">
            <IonIcon
              size="small"
              className="keyboard-button delete"
              icon={backspace}
            />
          </IonButton>
        </div>
        <div className="keyboard-container">
          {arrayObject.map((a, index) => (
            <IonRow key={index} className="keyboard-container-flex">
              {a.map((keyValue, i) => (
                <IonCol size="1" className="keyboard-col" key={i}>
                  {keyValue !== "Reset" && keyValue !== "Enter" ? (
                    <IonButton
                      disabled={newGame ? true : false}
                      onClick={handleClick}

                      color="warning"
                      className="keyboard-button annuler"
                    >
                      {keyValue}
                    </IonButton>
                  ) : null}
                </IonCol>
              ))}
            </IonRow>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
