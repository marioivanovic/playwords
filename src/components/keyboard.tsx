
import { IonButton, IonCol, IonContent, IonRow } from "@ionic/react";
import { useState } from "react";
import '../components/keyboard.css'
import clavier from "./../keyboards.json";

const Keyboard: React.FC = () => {
  const [press, setPress] = useState("");
  const [random, setRandom] = useState("");
  const top = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const middle = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const bottom = ["B", "M", "N", "V", "C", "Z", "X"];
  const arrayObject = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["B", "M", "N", "V", "C", "Z", "X"],
  ];
  const handleClick = (event:any)=>{
    setPress(event.target.innerText);
  }
  return (
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
  );
};

export default Keyboard;
