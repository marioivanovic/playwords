import { IonItem, IonInput } from "@ionic/react"

export const IInputCol = (props:{value: string, onIonChange: any, id: string}) => {
    const {value, onIonChange, id} = props;

    return(
        <div id={id}>
            <IonInput value={value} onIonChange={onIonChange} size={1} maxlength={1}></IonInput>
        </div>
    );
};