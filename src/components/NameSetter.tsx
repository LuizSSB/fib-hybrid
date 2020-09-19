import React, { useEffect, useRef, useState } from 'react'
import { IonInput, IonButton, IonAlert } from '@ionic/react'

export type NameSetterProps = {
  label: string
  initialValue?: string
  placeholder: string
  buttonTitle?: string
  onNameSave: (name: string) => void
}

function isValid(name: string): boolean {
  return name.length > 0
}

function useValidName(
  validNames: string[], initialName?: string
): [
  string | undefined,
  React.Dispatch<React.SetStateAction<string | undefined>>,
  boolean
] {
  const [name, setName] = useState<string | undefined>(initialName)
  return [
    name,
    setName,
    isValid(name ?? '') && validNames.indexOf(name ?? '') > -1
  ]
}

const NameSetter: React.FC<NameSetterProps> = ({
  label, initialValue, placeholder, buttonTitle, onNameSave
}: NameSetterProps) => {
    const [name, setName, isValid] = useValidName(
      ['luiz', 'fulano', 'ciclano'], initialValue
    )
    
    const [isNameEmptyAlertOpen, setNameEmptyAlertOpen] = useState(false)

    const inputRef = useRef<HTMLIonInputElement>(null)

    // const value: string | number | undefined = ''
    // if (value !== undefined) {
    //   console.log('value is defined')
    // }

    // var a: NameSetterClass//.. = 
    // typeof a === 'object' // true

    useEffect(
      () => {
        setName(initialValue)
        return () => {
          console.log('indo embora', initialValue)
        }
      },
      [initialValue]
    )
    
    const handleClick = () => {
      if (!name?.trim()) {
        setNameEmptyAlertOpen(true)
        return
      }
      
      onNameSave(name)
      setName('')

      inputRef.current?.setFocus()
    }

    return (
      <div style={{
          maxWidth: 250,
          padding: 15
        }}>
        <label htmlFor="edit_name">{label}: {name}</label>
        <br />
        <IonInput
          ref={inputRef}
          type="text"
          id="edit_name"
          style={{ border: 'solid 1px black' }}
          placeholder={placeholder}
          value={name}
          onIonChange={(e) => setName(e.detail.value ?? '')}
         />
        <br />
        <IonButton onClick={handleClick}>
          Salvar {buttonTitle}
        </IonButton>
        <IonAlert
          isOpen={isNameEmptyAlertOpen}
          onDidDismiss={() => setNameEmptyAlertOpen(false)}
          header="Erro"
          subHeader="subtitulo"
          message={'<div height=123>nome<br />\n\n\n\nvazio</div>'}
          buttons={[
            "Fechar",
            {
              text: "Voltar para o campo",
              handler: () => inputRef.current!.setFocus()
            }
          ]}
        />
      </div>
    )
}

type NameSetterState = {
    name: string | undefined | null
}

// interface NameSetterState {
//     name: string | undefined | null
// }

class NameSetterClass extends React.Component<NameSetterProps, NameSetterState> {
    state: NameSetterState = {
        name: undefined
    }

    render() {
        return (
          <div style={{
              maxWidth: 250,
              padding: 15
            }}>
            <label htmlFor="edit_name">{this.props.label}: {this.state.name}</label>
            <br />
            <IonInput
              type="text"
              id="edit_name"
              style={{ border: 'solid 1px black' }}
              placeholder={this.props.placeholder}
              onIonChange={(e) => {
                  this.setState({
                      name: e.detail.value
                  })
              }}
             />
            <br />
            <IonButton onClick={() => alert('Seu nome é ' + this.state.name)}>
              Salvar {this.props.buttonTitle}
            </IonButton>
          </div>
        )
    }
}

export default NameSetter