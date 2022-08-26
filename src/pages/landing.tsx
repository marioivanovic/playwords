import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonToolbar,
} from "@ionic/react";
import "./landing.css";

const Landing: React.FC = () => {
  const [pseudo, setPseudo] = useState([]);

  const gamer = {
    pseudo: pseudo,
  };

  let saveData = () => {
    localStorage.setItem("pseudo", JSON.stringify(gamer));
  };

  const rows = [];
  const legends = [
    {
      description: "La lettre est au bon endroit",
      status: "success",
    },
    {
      description: "La lettre est au mauvais endroit",
      status: "misplaced",
    },
    {
      description: "La lettre n’est pas contenue dans le mot ",
      status: "failed",
    },
  ];

  for (let row = 0; row < 3; row++) {
    let cols = [];
    for (let col = 0; col < 1; col++) {
      cols.push({ key: "", value: "" });
    }
    rows.push(cols);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bienvenue</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel position="floating">Entrez votre pseudo</IonLabel>
          <IonInput
            type="text"
            id="pseudo"
            clearInput
            onIonChange={(e: any) => setPseudo(e.detail.value!)}
            required
          ></IonInput>
        </IonItem>
        <IonGrid>
          {legends.map((legend, i) => (
            <div key={i} className="legend-container">
              <div className={"legend" + " " + legend.status}></div>
              <div className="legend-description">{legend.description}</div>
            </div>
          ))}
        </IonGrid>
        <IonButton
          className="btn"
          onClick={saveData}
          color="medium"
          expand="full"
          size="large"
          type="submit"
        >
          <Link to="/home">Jouer</Link>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Landing;
