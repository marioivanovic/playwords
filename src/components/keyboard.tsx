import { IonButton } from "@ionic/react";

import clavier from "./../keyboards.json";

const Keyboard: React.FC = () => {
  return (
    <div>
      <div className="keyboard-container">
        {/* {clavier.map((keyboard:any, i) => (
          <div key={i}>
            keyboard.map((button, index) => (
                <IonButton key={index}>
                    {button}
                </IonButton>)
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Keyboard;

{
  /* {
              props.map((clav, index) => {
                  clav ? clav.map(keyboard, i) => {
              <IonButton>{ clavier.top }</IonButton>
            }
        })
        : null} */
}
