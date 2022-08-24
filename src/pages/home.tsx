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

const Home: React.FC = () => {
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
