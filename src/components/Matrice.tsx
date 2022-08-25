import { IonItem, IonInput, IonGrid, IonRow, IonCol } from "@ionic/react"
import { useState } from "react";
import { IInputCol } from "./IInputCol";
let matrice = [
    [{value:"", disabled:false}, {value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}],
    [{value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}],
    [{value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}],
    [{value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}],
    [{value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}],
    [{value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}, {value:"", disabled:true}],
  ];

export const Matrice = () => {
    const [board, setBoard] = useState([...matrice]);

    const Ionchange =(event:any, index: number, i:number)=>{
        let currentMatrice = [...matrice];
        console.log(currentMatrice)
        // console.log(matrice[index][i].value)
        // matrice[index][i].value=event.detail.value;
        // matrice[index][i].disabled=true;
        // matrice[index][i+1].disabled=false;
        // console.log(matrice[index][i].value)
    }
    

    return(
        <IonGrid>
          {matrice.length > 0
            ? matrice.map((row, index) => (
                <IonRow key={index}>
                  {row.length > 0
                    ? row.map((col, i) => (
                        <IonCol key={i} size="2">
                          <IInputCol value={col.value}  onIonChange={Ionchange}/>
                        </IonCol>
                      ))
                    : null}
                </IonRow>
              ))
            : null}
        </IonGrid>
    );
};