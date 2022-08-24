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


const Home: React.FC = () => {
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
    { key: "Z", className: "" }
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
          <IonRow>
            <IonCol>
              <IonButton></IonButton>
            </IonCol>
            <IonCol>
              <IonButton></IonButton>
            </IonCol>
            <IonCol>
              <IonButton></IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton></IonButton>
            </IonCol>
            <IonCol>
              <IonButton></IonButton>
            </IonCol>
            <IonCol>
              <IonButton></IonButton>
            </IonCol>
            <IonCol>
              <IonButton></IonButton>
            </IonCol>
            <IonCol>
              <IonButton></IonButton>
            </IonCol>
            <IonCol>
              <IonButton></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
