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
import Keyboard from "./../components/keyboard";
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
                        <IonCol key={i}>
                          <IonButton onClick={handleClick} >A</IonButton>
                        </IonCol>
                      ))
                    : null}
                </IonRow>
              ))
            : null}
        </IonGrid>
        <h1>Le mot a deviner est : {random}</h1>
        <h1>Le mot a presser est : {press}</h1>


        {/* <Keyboard arrayProps={clavier.top} />
        <Keyboard arrayProps={clavier.middle} />
        <Keyboard arrayProps={clavier.bottom} /> */}

      </IonContent>
    </IonPage>
  );
};

export default Home;
