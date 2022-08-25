import { IonButton } from "@ionic/react";
import clavier from "./../keyboards.json";

const Keyboard: React.FC = () => {
  let keyboards = clavier;

  //   const keyboardTable = document.getElementsByClassName("keyboard-container");
  //   const letters = keyboardTable[0].innerHTML;
  //   function displayLetters() {
  // keyboards.clavier
  //   .map((keyboard) => {
  //     document.getElementsByClassName("keyboard-container")[0].innerHTML += `
  //           <IonButton>${keyboard.top}</IonButton>
  //           <IonButton>${keyboard.middle}</IonButton>
  //           <IonButton>${keyboard.bottom}</IonButton>`;
  //   })
  //   .join("");
  //   }
  //   displayLetters();

  // interventions.map((intervention) => {
  //     const status = getInterventionStyleByStatus(intervention.status);
  //     document.getElementsByClassName(
  //         "box-interventions"
  //     )[0].innerHTML += `<div class="box-intervention ${status}" draggable="true" data-intervention=${intervention.id} >
  //         <span class="intervention-title">${intervention.title}</span>
  //         <span class="intervention-status">${intervention.status}</span>
  //       </div>`;
  // });
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
