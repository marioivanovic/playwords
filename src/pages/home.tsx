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
import '../components/keyboard.css'
import clavier from "./../keyboards.json";


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

  let datass = data;
  let datas = data.data;
  const [arrI, setArrI] = useState([...datas]);
  const [press, setPress] = useState("");
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

  const handleClick = (event:any)=>{
    console.log(event.target.innerText);
    setPress(event.target.innerText);
  }

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
                        <IonCol key={i} size="2">
                          <IonButton onClick={handleClick} >a</IonButton>
                        </IonCol>
                      ))
                    : null}
                </IonRow>
              ))
            : null}
        </IonGrid>
        <h1>Le mot a deviner est : {random}</h1>
        <h1>Le mot a presser est : {press}</h1>

        <div className="keyboard-container">
        {arrayObject.map((a, index)=>(
          <IonRow key={index} className="keyboard-container-flex">
              {a.map((keyValue, i)=>(
                <IonCol size="1" className="keyboard-col" key={i}>
                  <IonButton onClick={handleClick} size="small" className="keyboard-button">{keyValue}</IonButton>
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
