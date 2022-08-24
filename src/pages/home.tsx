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
} from "@ionic/react";
import "./home.css";
import data from "../Data.json";
import { useEffect, useState } from "react";

const Home: React.FC = () => {

  const rows = [];

  for (let row = 0; row < 6; row++) {
    let cols = [];
    for (let col = 0; col < 7; col++) {
      cols.push({ key: "", value: "" });
    }
    rows.push(cols);
  }

  console.log(rows);
  let datass = data;
  console.log(datass.data);
  const clavier = [
    { key: "A", className: "" },
    { key: "B", className: "" },
    { key: "C", className: "" },
    { key: "D", className: "" },
    { key: "E", className: "" },
    { key: "F", className: "" },
    { key: "G", className: "" },
    { key: "H", className: "" },
    { key: "I", className: "" },
    { key: "J", className: "" },
    { key: "K", className: "" },
    { key: "L", className: "" },
    { key: "M", className: "" },
    { key: "N", className: "" },
    { key: "O", className: "" },
    { key: "P", className: "" },
    { key: "Q", className: "" },
    { key: "R", className: "" },
    { key: "S", className: "" },
    { key: "T", className: "" },
    { key: "U", className: "" },
    { key: "V", className: "" },
    { key: "W", className: "" },
    { key: "X", className: "" },
    { key: "Y", className: "" },
    { key: "Z", className: "" },
  ];
  const arrayA = [
    [
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
    ],
    [
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
    ],
    [
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
    ],
    [
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
    ],
    [
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
    ],
    [
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
      { key: "", value: "" },
    ],
  ];
  let datas = data.data;
  const [arrI, setArrI] = useState([...datas]);
  const [random, setRandom] = useState("");

  useEffect(() => {
    randomValueFromArray();
  }, []);


  const randomValueFromArray = () => {
    let randomValueIndex = Math.floor(Math.random() * arrI.length);
    let wordOfItemInMyArray = arrI[randomValueIndex];

    arrI.splice(randomValueIndex, 1);
    setRandom(wordOfItemInMyArray);
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
          {rows.length > 0
            ? rows.map((row, index) => (
                <IonRow key={index}>
                  {row.length > 0
                    ? row.map((col, i) => (
                        <IonCol key={i}>
                          <IonButton>A</IonButton>
                        </IonCol>
                      ))
                    : null}
                </IonRow>
              ))
            : null}
        </IonGrid>
        <h1>Le mot a deviner est : {random}</h1>

      </IonContent>
    </IonPage>
  );
};

export default Home;
