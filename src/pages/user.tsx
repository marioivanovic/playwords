import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./user.css";

const User: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Play With Words </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTitle size="small">Bienvenue {GetStat().pseudo} </IonTitle>
      </IonContent>
    </IonPage>
  );
};
function GetStat() {
  var user: any = localStorage.getItem("stat");
  console.log(user);

  return JSON.parse(user);
}

export default User;
