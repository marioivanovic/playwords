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
        <IonTitle size="small">Hello {GetUser().pseudo} </IonTitle>
      </IonContent>
    </IonPage>
  );
};
function GetUser() {
  var user: any = localStorage.getItem("pseudo");

  return JSON.parse(user);
}

export default User;
