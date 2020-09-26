import React, { useContext } from 'react'
import { NamesContext } from '../contexts/NamesContext'
import NameList from './NameList'

const ContextualNameList: React.FC = () => {
    const [namesData, setNamesData] = useContext(NamesContext)

    return (
        <NameList
            nameList={namesData.names}
            onDelete={(index) => setNamesData({
                type: 'delete', indexToDelete: index
            })}
            onEdit={() => {}}
            />
    )
}

export default ContextualNameList