import React, { useState } from 'react'
import NameList from './NameList'
import NameSetter from './NameSetter'

const NameOrchestrator: React.FC = () => {
    const [nameList, setNameList] = useState<string[]>([])

    const handleNewName = (name: string) => {
      const newNameList = [name, ...nameList]
      setNameList(newNameList)
    }

    return (
        <div>
            <NameSetter
                label="Seu nome"
                placeholder="Digite seu nome"
                onNameSave={handleNewName}
            />
            <NameList nameList={nameList} />
        </div>
    )
}

export default NameOrchestrator