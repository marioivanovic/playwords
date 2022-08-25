import { IonItem, IonInput } from "@ionic/react"

export const IInputCol = (props:{value: string, onIonChange: any}) => {
    const {value, onIonChange} = props;
    return(
        <IonItem>
            <IonInput value={value} onIonChange={onIonChange} size={1} maxlength={1}></IonInput>
        </IonItem>
    );
};