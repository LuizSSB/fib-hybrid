import React, { useState } from 'react'
import { IonInput, IonButton } from '@ionic/react'

export type NameSetterProps = {
  label: string
  placeholder: string
  buttonTitle?: string
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
  label, placeholder, buttonTitle
}: NameSetterProps) => {
    const [name, setName, isValid] = useValidName(['luiz', 'fulano', 'ciclano'])
    console.log(name, isValid)

    return (
      <div style={{
          maxWidth: 250,
          padding: 15
        }}>
        <label htmlFor="edit_name">{label}: {name}</label>
        <br />
        <IonInput
          type="text"
          id="edit_name"
          style={{ border: 'solid 1px black' }}
          placeholder={placeholder}
          onIonChange={(e) => setName(e.detail.value ?? '')}
         />
        <br />
        <IonButton onClick={() => alert('Seu nome é ' + name)}>
          Salvar {buttonTitle}
        </IonButton>
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