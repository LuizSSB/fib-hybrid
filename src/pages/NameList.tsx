import React from 'react'
import { IonList, IonItem, IonLabel } from '@ionic/react'

type NameListProps = {
    names: string[]
}

const NameList: React.FC<NameListProps> = ({
    names,
}) => {
    return(
        <IonList>
            {names.map((name, index) => {
                return (
                    <IonItem key={`NameList_${name}_${index}`}>
                        <IonLabel>{name}</IonLabel>
                    </IonItem>
                )
            })}
        </IonList>
    )
}

export default NameList