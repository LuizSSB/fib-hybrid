import React, { useRef, useState } from 'react'
import { IonText, IonInput, IonButton } from '@ionic/react'

export type NameSetterProps = {
    initialValue: string
    placeholder: string
    buttonTitle: string
    onNameSet?: (name: string) => void
}

const NameSetter: React.FC<NameSetterProps> = ({
    initialValue, placeholder, buttonTitle, onNameSet
}: NameSetterProps) => {
    const inputRef = useRef<HTMLIonInputElement>(null)
    const [title, setTitle] = useState(initialValue)

    return <div style={{
        marginTop: '10px',
        border: 'solid 1px black'
    }}>
        <IonText>{title}</IonText>
        <IonInput
          ref={inputRef}
          type="text"
          placeholder={placeholder}
        />
        <IonButton onClick={() => {
          setTitle(inputRef.current!.value || '')
          if (onNameSet) {
              onNameSet(inputRef.current!.value || '')
          }
        }}>{buttonTitle}</IonButton>
    </div>
}

export default NameSetter