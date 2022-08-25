import { IonItem, IonInput } from "@ionic/react"

export const IInputCol = (props:{value: string, onIonChange: any, id: string, 
    // color: string
}) => {
    const {value, onIonChange, id, 
        // color
    } = props;
    // <IonItem id={id} 
    // color={'dark'}
    // color={color}
    //  >
        {/* </IonItem> */}
    return(
        <div id={id}>
            <IonInput value={value} onIonChange={onIonChange} size={1} maxlength={1}></IonInput>
        </div>
    );
};