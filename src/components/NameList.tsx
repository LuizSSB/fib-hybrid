import { IonAlert, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList, IonTitle } from '@ionic/react'
import React, { useState } from 'react'
import { create, trash } from 'ionicons/icons'

type NameListProps = {
    nameList?: string[]
    onDelete: (elementIndex: number) => void
    onEdit: (elementIndex: number) => void
}

const NameList: React.FC<NameListProps> = ({
    nameList, onDelete, onEdit
}: NameListProps) => {
    const [indexToDelete, setIndexToDelete] = useState<number | undefined>()

    const handleDelete = (itemIndex: number) => {
        setIndexToDelete(itemIndex)
    }

    return (
        <>
        <IonList>
            {nameList?.map((name, index) => (
                <IonItemSliding key={name}>
                    <IonItem>
                        <IonTitle>{name}</IonTitle>
                    </IonItem>
                    {/* <IonItemOptions side="start">
                        <IonItemOption
                            color="secondary"
                            onClick={() => alert('alterar')}
                        >
                            Alterar
                        </IonItemOption>
                        <IonItemOption
                            color="danger"
                            onClick={() => alert('E ae mano')}
                        >
                            Remover
                        </IonItemOption>
                    </IonItemOptions> */}
                    <IonItemOptions side="end">
                        <IonItemOption
                            color="secondary"
                            onClick={() => onEdit(index)}
                        >
                            <IonIcon icon={create} />
                        </IonItemOption>
                        <IonItemOption
                            color="danger"
                            onClick={() => handleDelete(index)}
                        >
                        <IonIcon icon={trash} />
                        </IonItemOption>
                    </IonItemOptions>
                </IonItemSliding>
            ))}
        </IonList>
        <IonAlert
            isOpen={indexToDelete !== undefined}
            onDidDismiss={() => setIndexToDelete(undefined)}
            message={`Deseja mesmo deletar ${
                indexToDelete !== undefined ? nameList![indexToDelete] : ''
            }?`}
            buttons={[
                'Deixa quieto',
                {
                    text: 'Manda ver',
                    handler: () => onDelete(indexToDelete!)
                }
            ]}
        />
        </>
    )
}

export default NameList