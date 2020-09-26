import { IonContent, IonHeader, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import ContextualNameAdder from '../components/ContextualNameAdder'

const AddPage: React.FC = () => {
    const history = useHistory()
    const [showToast, setShowToast] = useState(false)
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Novo nome
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <ContextualNameAdder onDidSaveName={() => {
                        history.goBack()
                        setShowToast(true)
                    }} />
                </IonContent>
            </IonPage>
        </>
    )
}

export default AddPage