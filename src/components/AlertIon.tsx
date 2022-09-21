import React, { useState } from "react";
import { IonButton, useIonAlert } from "@ionic/react";

function Example(props: { content: string; isShow: boolean }) {
  const { content, isShow } = props;
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [show, setShow] = useState(isShow);
  const [roleMessage, setRoleMessage] = useState("");

  return (
    <>
      {/* <IonButton
        onClick={() =>
          presentAlert({
            header: 'Alert Infos!',
            message: content,
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  setHandlerMessage('Alert canceled');
                },
              },
              {
                text: 'OK',
                role: 'confirm',
                handler: () => {
                  setHandlerMessage('Alert confirmed');
                },
              },
            ],
            onDidDismiss: (e: CustomEvent) => setRoleMessage(`Dismissed with role: ${e.detail.role}`),
          })
        }
      >
        Click Me
      </IonButton> */}

      {show
        ? presentAlert({
            header: "Alert Infos!",
            message: content,
            buttons: [
              {
                text: "Non j'abandonne",
                role: "cancel",
                handler: () => {
                  setHandlerMessage("Alert canceled");
                },
              },
              {
                text: "Je refais une partie",
                role: "confirm",
                handler: () => {
                  setHandlerMessage("Alert confirmed");
                },
              },
            ],
            onDidDismiss: (e: CustomEvent) =>
              setRoleMessage(`Dismissed with role: ${e.detail.role}`),
          })
        : null}
      {/* <p>{handlerMessage}</p>
      <p>{roleMessage}</p> */}
    </>
  );
}
export default Example;
