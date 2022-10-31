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
        {/* <IonTitle size="small">Nombre de parties : {GetUser().games} </IonTitle>
        <IonTitle size="small">Nombre d'essais {GetUser().essais} </IonTitle>
        <IonTitle size="small">Mots trouvés {GetUser().words} </IonTitle> */}
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
