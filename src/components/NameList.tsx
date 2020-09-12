import { IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonTitle } from '@ionic/react'
import React, { useState } from 'react'

type NameListProps = {
    nameList?: string[]
}

const NameList: React.FC<NameListProps> = ({
    nameList
}: NameListProps) => {
    return (
        <IonList>
            {nameList?.map((name) => (
                <IonItemSliding key={name}>
                    <IonItem>
                        <IonTitle>{name}</IonTitle>
                        <IonItemOptions side="end">
                            <IonItemOption
                                onClick={() => alert('E ae mano')}
                            >
                                Remover
                            </IonItemOption>
                        </IonItemOptions>
                    </IonItem>
                </IonItemSliding>
            ))}
        </IonList>
    )
}

export default NameList