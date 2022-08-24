import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
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
        <IonContent>
          <ion-grid>
            <ion-row>
              <ion-col>
                <div>1 of 3</div>
              </ion-col>
              <ion-col>
                <div>2 of 3</div>
              </ion-col>
              <ion-col>
                <div>3 of 3</div>
              </ion-col>
            </ion-row>
          </ion-grid>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
