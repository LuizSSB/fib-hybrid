import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router'
import NameSetter from '../components/NameSetter'
import { NamesContext } from '../contexts/NamesContext'

const UpdatePage: React.FC = () => {
    const [namesContext, dispatcher] = useContext(NamesContext)

    const history = useHistory()
    // history.location.pathname
    // useLocation()

    const { userId } = useParams<{ userId: string }>()
    const intUserId = parseInt(userId)

    const [userName, setUserName] = useState('')
    useEffect(() => setUserName(namesContext.names[intUserId]), [intUserId])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Atualizar - {userName}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <NameSetter
                    label="Novo nome"
                    placeholder={userName}
                    onNameSave={(newName) => {
                        dispatcher({ type: 'update', indexToUpdate: intUserId, newName })
                        history.goBack()
                    }}
                />
            </IonContent>
        </IonPage>
    )
}

export default UpdatePage