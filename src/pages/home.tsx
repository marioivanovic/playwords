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
} from "@ionic/react";
import "./home.css";
import Keyboard from "./../components/keyboard";
import data from "../Data.json";
import { useEffect, useState } from "react";
import "../components/keyboard.css";
import clavier from "./../keyboards.json";
import { IInputCol } from "../components/IInputCol";
import { Matrice } from "../components/Matrice";
// import { IInputCol } from "../components/IInputCol";
// import IcolInput from "../components/IcolInput";

const Home: React.FC = () => {
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
  let boardDefault = [
    [
      { value: "", disabled: false },
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
    ],
    [
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
    ],
    [
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
    ],
    [
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
    ],
    [
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
    ],
    [
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
      { value: "", disabled: true },
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
    console.log("row col",row,col)

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

              // col++;
            }
          }
          // row++;
        }
      }
    }
    if (col < 5) {
      setCol(col+1);
    }
    if (col === 5) {
      setRow(row+1);
    }
    currentMatrice[row][col].disabled = true;
    currentMatrice[row][col <4?col + 1:col].disabled = false;
    console.log(currentMatrice);
    console.log(row,col)
    setBoard(currentMatrice);
    boardDefault= currentMatrice;
    setPress(event.target.innerText);
  };

  const Ionchange = (event: any) => {
    let currentMatrice = [...board];
    console.log("onchange",board);

    // console.log(matrice[index][i].value)
    // matrice[index][i].value=event.detail.value;
    // matrice[index][i].disabled=true;
    // matrice[index][i+1].disabled=false;
    // console.log(matrice[index][i].value)
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
                          <IInputCol
                            value={col.value}
                            onIonChange={Ionchange}
                          />
                        </IonCol>
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
        <h1>Le mot a deviner est : {random}</h1>
        <h1>Le mot a presser est : {press}</h1>
      </IonContent>
    </IonPage>
  );
};

export default Home;
