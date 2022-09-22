import { IonItem, IonInput, IonGrid, IonRow, IonCol } from "@ionic/react";
import { useState } from "react";
import { IInputCol } from "./IInputCol";
let matrice = [
  [
    { value: "", disabled: false },
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
  ],
  [
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
  ],
  [
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
  ],
  [
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
  ],
  [
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
  ],
  [
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
    { value: "", disabled: true },
  ],
];

export const Matrice = () => {
  const [board, setBoard] = useState([...matrice]);

  const Ionchange = (event: any, index: number, i: number) => {
    let currentMatrice = [...matrice];
  };

  return (
    <IonGrid>
      {matrice.length > 0
        ? matrice.map((row, index) => (
            <IonRow key={index}>
              {row.length > 0
                ? row.map((col, i) => (
                    // <IonCol key={i} size="2" >
                    <div className="ioncol">
                      <IInputCol
                        // color={"dark"}
                        id={"id"}
                        value={col.value}
                        onIonChange={Ionchange}
                      />
                      {/* </IonCol> */}
                    </div>
                  ))
                : null}
            </IonRow>
          ))
        : null}
    </IonGrid>
  );
};
