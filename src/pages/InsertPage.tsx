import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/react'
import ContextualNameSetter from '../components/ContextualNameSetter'
import { useHistory } from 'react-router'

const InsertPage: React.FC = () => {
    const history = useHistory()
    const handleBack = () => {
        history.goBack()
    }

    return (
        <IonPage id="insert">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Inserir</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <ContextualNameSetter
                    initialValue="Nome da pessoa"
                    placeholder="Insira o nome"
                    buttonTitle="Adicionar"
                    onNameSet={handleBack}
                />
            </IonContent>
        </IonPage>
    )
}

export default InsertPage