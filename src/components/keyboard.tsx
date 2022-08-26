import { IonButton } from "@ionic/react";
import clavier from "./../keyboards.json";

const Keyboard: React.FC = () => {
  let keyboards = clavier;

  // keyboards.clavier
  //   .map((keyboard) => {
  //     document.getElementsByClassName("keyboard-container")[0].innerHTML += `
  //           <IonButton>${keyboard.top}</IonButton>
  //           <IonButton>${keyboard.middle}</IonButton>
  //           <IonButton>${keyboard.bottom}</IonButton>`;
  //   })
  //   .join("");

  //   for (var key in keyboards) {
  //     var top = keyboards.clavier[0];
  //     var middle = keyboards.clavier[1];
  //     var bottom = keyboards.clavier[2];
  //     console.log("top", top);
  //     console.log("middle", middle);
  //     console.log("bottom", bottom);
  //     console.log("key", key);
  //   }

  return (
    <div className="keyboard-container">
      {/* {keyboards.clavier
        .map((keyboard, i) => (
          <div>
            <IonButton key={i}>${keyboard.top}</IonButton>
            <IonButton key={i}>${keyboard.middle}</IonButton>
            <IonButton key={i}>${keyboard.bottom}</IonButton>
          </div>
        ))
        .join("")} */}
    </div>
  );
};

export default Keyboard;

// {row.length > 0
//     ? row.map((col, i) => (
//         <IonCol key={i}>
//           <IonButton></IonButton>
//         </IonCol>
//       ))
//     : null}
