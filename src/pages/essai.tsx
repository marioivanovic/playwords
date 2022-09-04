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
  IonFabButton,
} from "@ionic/react";
import "./home.css";
import Keyboard from "./../components/keyboard";
import data from "../Data.json";
import { useEffect, useState } from "react";
import "../components/keyboard.css";
import clavier from "./../keyboards.json";
import Board from "../components/Board";
import { boardDefault } from "../Words";

const Home: React.FC = () => {
  let datas = data.data;
  const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];
  const [arrI, setArrI] = useState([...datas]);
  const [press, setPress] = useState("");
  const [random, setRandom] = useState("");
  const [board, setBoard] = useState([...boardDefault]);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  // const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [currentPos, setCurrentPos] = useState({ row: 0, col: 0 });
  const [currentId, setCurrentId] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const arrayObject = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["B", "M", "N", "V", "C", "Z", "X"],
  ];
  const rows = [];

  for (let row = 0; row < 6; row++) {
    let cols = [];
    for (let col = 0; col < 5; col++) {
      cols.push({ key: "", value: "" });
    }
    rows.push(cols);
  }

  useEffect(() => {
    randomValueFromArray();
  }, []);

  const randomValueFromArray = () => {
    let randomValueIndex = Math.floor(Math.random() * arrI.length);
    let wordOfItemInMyArray = arrI[randomValueIndex];

    arrI.splice(randomValueIndex, 1);
    setRandom(wordOfItemInMyArray);
  };

  const handleClick = (event: any) => {
    setPress(event.target.innerText);
    setCurrentId(event.target.id);
    enterOn(event.target.id, event.target.innerText);
  };

  let currWord = "";
  const enterOn = (name: any, value: any) => {
    let test = boardDefault[currentPos.row][currentPos.col];
    test = value;
    setBoard(boardDefault);
    setPress(value);
    board.forEach((arr) => {
      for (let index = 0; index < board.length; index++) {
        const el = board[index];
        if (index === currentPos.row) {
          for (let i = 0; i < el.length; i++) {
            const element = el[i];
            if (currentPos.col === i) {
              setCurrentPos((prev) => ({
                ...prev,
                ["col"]: i++,
              }));
            }
          }
        }
      }
      boardDefault[0][0] = value;
      let is = name.split("-");
      // for (let i = 0; i < arr.length; i++) {
      //   const el = arr[i];

      // }
    });
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
  };
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
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          {board.length > 0
            ? board.map((row, index) => (
                <IonRow key={index}>
                  {row.length > 0
                    ? row.map((col, i) => (
                        <IonCol key={i} size="2">
                          <IonButton id={`${index}-${i}`} onClick={handleClick}>
                            {press}
                            {currentId === `${index}-${i}` ? press : null}
                          </IonButton>
                        </IonCol>
                      ))
                    : null}
                </IonRow>
              ))
            : null}
          {/* {rows.length > 0
              ? rows.map((row, index) => (
                  <IonRow key={index}>
                    {row.length > 0
                      ? row.map((col, i) => (
                          <IonCol key={i} size="2">
                            <IonButton onClick={handleClick}></IonButton>
                          </IonCol>
                        ))
                      : null}
                  </IonRow>
                ))
              : null} */}
        </IonGrid>
        <h1>Le mot a deviner est : {random}</h1>
        <h1>Le mot a presser est : {press}</h1>

        <div className="keyboard-container">
          {arrayObject.map((a, index) => (
            <IonRow key={index} className="keyboard-container-flex">
              {a.map((keyValue, i) => (
                <IonCol size="1" className="keyboard-col" key={i}>
                  <IonButton
                    onClick={handleClick}
                    size="small"
                    className="keyboard-button"
                  >
                    {keyValue}
                  </IonButton>
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
