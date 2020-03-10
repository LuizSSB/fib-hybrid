import React from 'react'
import { addCircle } from 'ionicons/icons'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/react'
import ContextualNameList from '../components/ContextuaNameList'
import { useHistory } from 'react-router'

const ListPage: React.FC = () => {
    const history = useHistory()

    const handleInsert = () => {
        history.push('/insert')
    }

    return (
        <IonPage id="list">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Lista de nomes</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={handleInsert}>
                            <IonIcon icon={addCircle} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <ContextualNameList />
            </IonContent>
        </IonPage>
    )
}

export default ListPage