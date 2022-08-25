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
import { backspace } from "ionicons/icons";
import '../components/styles.css'

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
      { value: "", disabled: false, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
    ],
    [
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
    ],
    [
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
    ],
    [
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
    ],
    [
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
    ],
    [
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
      { value: "", disabled: true, color: "" },
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
  let nbrRoWord = 0;
  // let col = 0;
  // let row = 0;
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
    console.log("row col", row, col);

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
    console.log(currentMatrice);
    console.log(row, col);
    setBoard(currentMatrice);
    boardDefault = currentMatrice;
    setPress(event.target.innerText);
  };

  const Ionchange = (event: any) => {
    let currentMatrice = [...board];
    console.log("onchange", board);

    // console.log(matrice[index][i].value)
    // matrice[index][i].value=event.detail.value;
    // matrice[index][i].disabled=true;
    // matrice[index][i+1].disabled=false;
    // console.log(matrice[index][i].value)
  };

  const prev = (event: any) => {
    console.log(event);
  };

  const compare = (event: any) => {
    let valid = false;
    console.log(board[0][0].value);
    let arrayToString =
      board[0][0].value +
      board[0][1].value +
      board[0][2].value +
      board[0][3].value +
      board[0][4].value;
    console.log(arrayToString, random);
    if (arrayToString.toLocaleLowerCase() === random.toLocaleLowerCase()) {
      console.log("le mot est green");
      valid = true;
      let r = document.getElementById(`id-${row - 1}-${col}`)
      console.log(r)

    } else {
      let arrayValue = arrayToString.split("");
      let arrayTest = random.split("");
      let arrTest = document.querySelector(`#id-${row - 1}`);
      let item1 =document.querySelector(`#id-${row - 1}-${col}`);
      let item2=document.querySelector(`#id-${row - 1}-${col}`);
      let item3 =document.querySelector(`#id-${row - 1}-${col}`);
      let item4 =document.querySelector(`#id-${row - 1}-${col}`);
      let item5 =document.querySelector(`#id-${row - 1}-${col}`);
      
      console.log("first", item1);

      for (let i = 0; i < arrayValue.length; i++) {
        const strSplit = arrayValue[i];
        if (random.includes(strSplit.toUpperCase())) {
          for (let index = 0; index < arrayTest.length; index++) {
            const worldSplit = arrayTest[index];
            if (index === i) {
              if (
                worldSplit.toLocaleUpperCase() === strSplit.toLocaleUpperCase()
              ) {
                console.log("color green ", strSplit, worldSplit);
              }
              if (
                worldSplit.toLocaleUpperCase() !==
                  strSplit.toLocaleUpperCase() &&
                random.includes(strSplit.toUpperCase())
              ) {
                console.log("color orange ", strSplit, worldSplit);
              }
            }
          }
        } else {
          console.log("rouge", strSplit);
        }
      }
    }
  };

  const reset = (event: any) => {
    console.log(event);
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
                        <div className="ioncol">
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
                    <IonButton color={"danger"}>
                      <IonIcon
                        onClick={prev}
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
        </div>
        <h1 className="ioncol">Le mot a deviner est : {random}</h1>
        {/* <h1>Le mot a presser est : {press}</h1> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
