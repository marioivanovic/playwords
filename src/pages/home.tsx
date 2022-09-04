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
      { value: "", disabled: false, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
    ],
    [
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
    ],
    [
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
    ],
    [
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
    ],
    [
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
    ],
    [
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
      { value: "", disabled: true, color: "ioncol" },
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

  function GetUser() {
    var user: any = localStorage.getItem("pseudo");

    return JSON.parse(user);
  }

  const [wordsFind, setWordsFind] = useState([]);
  const [isRefrech, setIsrefrech] = useState(false);
  const [newGame, setNewGame] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [str, setStr] = useState("");
  const [nbrTest, setNbrTest] = useState(0);
  const [presentAlert] = useIonAlert();


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
    if (row === 0) {
      for (let i = 0; i < currentMatrice[0].length; i++) {
        const el = currentMatrice[0][i];
        if (i === col) {
          el.value = event.target.innerText;
        }
      }
    } else {
      for (let index = 0; index < currentMatrice.length; index++) {
        const element = currentMatrice[index];
        if (index === row) {
          for (let i = 0; i < element.length; i++) {
            const el = element[i];
            if (i === col) {
              el.value = event.target.innerText;
            }
          }
        }
      }
    }
    if (col < 4) {
      setCol(col + 1);
    }
    // if (col === 4) {
    //   setRow(row + 1);
    //   setCol(0);
    // }
    currentMatrice[row][col].disabled = true;
    currentMatrice[row][col < 4 ? col + 1 : col].disabled = false;
    setBoard(currentMatrice);
    boardDefault = currentMatrice;
    setPress(event.target.innerText);
  };

  const Ionchange = (event: any) => {};

  const prev = () => {
    if (col === 0) {
      let copy = [...board];
      copy[row - 1][4].value = "";
      copy[row - 1][4].disabled = false;
      setCol(4);
      setRow(row - 1);
      setBoard(copy);
    } else {
      let copy = [...board];
      console.log(copy[row][col]);
      copy[row][col - 1].value = "";
      setCol(col - 1);
      setBoard(copy);
    }
  };
  const nbre_caracteres = (lettre: string, mot: string) => {
    console.log(mot);
    let mots = mot.split("");
    var nbre_de_fois_trouve = 0;

    for (var i = 0; i < mots.length; i++) {
      if (lettre == mots[i]) nbre_de_fois_trouve++;
    }
    // console.log(nbre_de_fois_trouve) ;
    return nbre_de_fois_trouve;
  };

  const compare = (event: any) => {
    let valid = false;
    let arrayToString =
      board[row][0].value +
      board[row][1].value +
      board[row][2].value +
      board[row][3].value +
      board[row][4].value;
    console.log(arrayToString, random);

    if (arrayToString.toLocaleLowerCase() === random.toLocaleLowerCase()) {
      valid = true;
      let copyBoard = [...board];
      // copyBoard[row - 1].forEach((col) => {
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
                      // copyBoard[row - 1][i].color = "ionColRed";
                      copyBoard[row][i].color = "ionColRed";
                      setBoard(copyBoard);
                    }
                  }

                  if (nb <= letterRepeatRandom) {
                    // copyBoard[row - 1][i].color = "ionColOrange";
                    copyBoard[row][i].color = "ionColOrange";
                    setBoard(copyBoard);
                  } else {
                    // copyBoard[row - 1][i].color = "ionColRed";
                    copyBoard[row][i].color = "ionColRed";
                    setBoard(copyBoard);
                  }
                }
              }
            }
          }
        } else {
          // copyBoard[row - 1][i].color = "ionColRed";
          copyBoard[row][i].color = "ionColRed";
          setBoard(copyBoard);
        }
      }
    }

    setNbrTest(nbrTest + 1);
    let result = "";

    if (nbrTest === 5) {
      if (valid) {
        result = "Felicitations c'etait moin une !!!!!";
      } else {
        result = "Dommage, loose, Vous avez perdu";
      }
      setIsShow(true);
      setIsrefrech(true);
      setNewGame(true);
    }

    if (nbrTest < 5) {
      if (valid) {
        result = "Felicitations !!!!!";
        setIsShow(true);
        setNewGame(true);
      } else {
        result = "Dommage, loose Vous pouvez reessayez encore";
      }
    }

    setStr(result);
    if (col === 4) {
      setRow(row + 1);
      setCol(0);
    }
  };

  const reset = (event: any) => {
    setBoard(boardDefault);
    setCol(0);
    setRow(0);
    randomValueFromArray();
    setNewGame(false);
    setStr("");
    setNbrTest(0);
  };

  console.log(isShow);
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1 className="ioncol">Le mot à trouver est : {random}</h1>
        {/* <IonButton color={"danger"} onClick={reset}>
          <IonIcon className="keyboard-button" icon={refreshCircle} />
        </IonButton> */}
        <IonAlert
          isOpen={isShow}
          onDidDismiss={() => setIsShow(false)}
          header="Alert Infos"
          subHeader="Important message"
          message={str}
          buttons={["OK"]}
        />

        {/* grid */}
        <IonGrid>
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
            color="tertiary"
            onClick={reset}
          >
            {newGame ? "Nouvelle Partie" : "Recommencer la partie"}
          </IonButton>
          <IonButton color={"danger"} onClick={prev} className="delete">
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
                  {/* {keyValue === "Enter" ? (
                    <IonButton
                      color="success"
                      onClick={compare}
                      size="small"
                      className="keyboard-button compare"
                    >
                      {keyValue}
                    </IonButton>
                  ) : null}
                  {keyValue === "Reset" ? (
                    <IonButton
                      color={"danger"}
                      onClick={prev}
                      className="delete"
                    >
                      <IonIcon
                        size="small"
                        className="delete"
                        icon={backspace}
                      />
                    </IonButton>
                  ) : null} */}
                  {keyValue !== "Reset" && keyValue !== "Enter" ? (
                    <IonButton
                    disabled={newGame ? true : false}
                      onClick={handleClick}
                      size="large"
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
