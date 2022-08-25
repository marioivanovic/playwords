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
  IonItem,
  IonInput,
  IonIcon,
} from "@ionic/react";
import "./home.css";
import Keyboard from "./../components/keyboard";
import data from "../Data.json";
import { useEffect, useState } from "react";
import "../components/keyboard.css";
import clavier from "./../keyboards.json";
import { IInputCol } from "../components/IInputCol";
import { Matrice } from "../components/Matrice";
import { backspace, refreshCircle } from "ionicons/icons";
import "../components/styles.css";

const Home: React.FC = () => {
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
  const [isCompare, setIsCompare] = useState(false);
  let nbrRoWord = 0;
  useEffect(() => {
    randomValueFromArray();
  }, [is]);

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
    if (col === 4) {
      setRow(row + 1);
      setCol(0);
    }
    currentMatrice[row][col].disabled = true;
    currentMatrice[row][col < 4 ? col + 1 : col].disabled = false;
    setBoard(currentMatrice);
    boardDefault = currentMatrice;
    setPress(event.target.innerText);
  };

  const Ionchange = (event: any) => {
    // console.log("onchange", board);
  };

  const prev = () => {
    let copyBoard = [...board];
    copyBoard[row][col - 1].value = "";
    setCol(col - 1);
    setBoard(copyBoard);
    setIS(true);
  };

  const compare = (event: any) => {
    let valid = false;
    let arrayToString =
      board[row - 1][0].value +
      board[row - 1][1].value +
      board[row - 1][2].value +
      board[row - 1][3].value +
      board[row - 1][4].value;
    console.log(arrayToString, random);
    if (arrayToString.toLocaleLowerCase() === random.toLocaleLowerCase()) {
      console.log("le mot est green");
      valid = true;
      let copyBoard = [...board];
      copyBoard[row - 1].forEach((col) => {
        col.color = "ionColGreen";
      });
      setBoard(copyBoard);
      console.log(board);
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
                copyBoard[row - 1][i].color = "ionColGreen";
                setBoard(copyBoard);
              }
              if (
                worldSplit.toLocaleUpperCase() !==
                  strSplit.toLocaleUpperCase() &&
                random.includes(strSplit.toUpperCase())
              ) {
                copyBoard[row - 1][i].color = "ionColOrange";
                setBoard(copyBoard);
              }
            }
          }
        } else {
          copyBoard[row - 1][i].color = "ionColRed";
          setBoard(copyBoard);
        }
      }
    }
  };

  const reset = (event: any) => {
    console.log(event);
    setBoard(boardDefault);
    setCol(0);
    setRow(0);
    randomValueFromArray();
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
                <IonRow key={index} id={"id-" + index}>
                  {row.length > 0
                    ? row.map((col, i) => (
                        // <IonCol key={i} size="2" id={"id-" + index + "-" + i}>
                        <div className={col.color}>
                          <IInputCol
                            // color="warning"
                            key={i}
                            id={"id-" + index + "-" + i}
                            value={col.value}
                            onIonChange={Ionchange}
                          />
                        </div>
                        // </IonCol>
                      ))
                    : null}
                </IonRow>
              ))
            : null}
        </IonGrid>
        {/* <Matrice /> */}

        <div className="keyboard-container">
          {arrayObject.map((a, index) => (
            <IonRow key={index} className="keyboard-container-flex">
              {a.map((keyValue, i) => (
                <IonCol size="1" className="keyboard-col" key={i}>
                  {keyValue === "Enter" ? (
                    <IonButton
                      color="success"
                      onClick={compare}
                      size="small"
                      className="keyboard-button"
                    >
                      {keyValue}
                    </IonButton>
                  ) : null}
                  {keyValue === "Reset" ? (
                    <IonButton color={"danger"} onClick={prev}>
                      <IonIcon
                        size="small"
                        // color="danger"
                        className="keyboard-button"
                        icon={backspace}
                      />
                    </IonButton>
                  ) : null}
                  {keyValue !== "Reset" && keyValue !== "Enter" ? (
                    <IonButton
                      onClick={handleClick}
                      size="small"
                      color="warning"
                      className="keyboard-button"
                    >
                      {keyValue}
                    </IonButton>
                  ) : null}
                </IonCol>
              ))}
            </IonRow>
          ))}

          <IonButton color={"danger"} onClick={reset}>
            <IonIcon
              size="small"
              className="keyboard-button"
              icon={refreshCircle}
            />
          </IonButton>
        </div>
        <h1 className="ioncol">Le mot a deviner est : {random}</h1>
        {/* <h1>Le mot a presser est : {press}</h1> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
