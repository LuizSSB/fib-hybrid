import { IonLoading, IonToast } from '@ionic/react'
import React, { useContext } from 'react'
import { NamesContext } from '../contexts/NamesContext'

const NameDialogs: React.FC = () => {
    const [context, dispatch] = useContext(NamesContext)

    return (
        <>
            <IonToast
                isOpen={context.dialogState === 'deleted'}
                onDidDismiss={() => dispatch({ type: "resetDialog" })}
                message="Nome deletado"
                color="danger"
                duration={1800}
                />
            <IonToast
                isOpen={context.dialogState === 'added'}
                onDidDismiss={() => dispatch({ type: "resetDialog" })}
                message="Nome adicionado"
                duration={1800}
                />
            <IonToast
                isOpen={context.dialogState === 'updated'}
                onDidDismiss={() => dispatch({ type: "resetDialog" })}
                message="Nome atualizado"
                duration={1800}
                />
            <IonLoading isOpen={context.dialogState === 'initializing'} />
        </>
    )
}

export default NameDialogs