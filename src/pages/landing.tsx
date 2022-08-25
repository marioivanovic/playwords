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

import { Gamers, UsersContextConsumer } from "./../services/storage.services";

const Landing: React.FC = () => {
  var pseudo: string;
  var games: number;
  var success: number;
  var essais: number;

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
          <IonInput onIonChange={(e) => (pseudo = e.detail.value!)}></IonInput>
        </IonItem>
        <IonGrid>
          {rows.length > 0
            ? rows.map((row, index) => (
                <IonRow key={index}>
                  {row.length > 0
                    ? row.map((col, i) => (
                        <IonCol key={i}>
                          {legends.length > 0
                            ? legends.map((legend, i) => (
                                <div className="legend ${legend.status}">
                                  ${legend.description}
                                </div>
                              ))
                            : null}
                        </IonCol>
                      ))
                    : null}
                </IonRow>
              ))
            : null}
        </IonGrid>
        <UsersContextConsumer>
          {(context: Gamers) => (
            <IonButton
              color="medium"
              size="large"
              onClick={(e) => {
                context.gamers
                  ? context.gamers.push({
                      pseudo: pseudo,
                      games: games,
                      success: success,
                      essais: essais,
                    })
                  : (context.gamers = [
                      {
                        pseudo: pseudo,
                        games: games,
                        success: success,
                        essais: essais,
                      },
                    ]);
              }}
            >
              <Link to="/home">Jouer</Link>
            </IonButton>
          )}
        </UsersContextConsumer>
      </IonContent>
    </IonPage>
  );
};

export default Landing;
