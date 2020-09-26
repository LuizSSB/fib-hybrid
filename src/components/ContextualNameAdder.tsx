import React, { useContext } from 'react'
import { NamesContext } from '../contexts/NamesContext'
import NameSetter from './NameSetter'

export type ContextualNameAdderProps = {
    onDidSaveName: () => void
}

const ContextualNameAdder: React.FC<ContextualNameAdderProps> = ({
    onDidSaveName
}: ContextualNameAdderProps) => {
    const [ , setNamesData] = useContext(NamesContext)

    return (
        <NameSetter
            label="Novo nome"
            placeholder="Digite o novo nome"
            onNameSave={(name) => {
                setNamesData({
                    type: 'add', nameToAdd: name
                })
                onDidSaveName()
            }}
         />
    )
}

export default ContextualNameAdder