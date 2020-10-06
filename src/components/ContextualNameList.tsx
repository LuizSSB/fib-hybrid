import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { NamesContext } from '../contexts/NamesContext'
import NameList from './NameList'

const ContextualNameList: React.FC = () => {
    const [namesData, setNamesData] = useContext(NamesContext)
    const history = useHistory()

    return (
        <NameList
            nameList={namesData.names}
            onDelete={(index) => setNamesData({
                type: 'delete', indexToDelete: index
            })}
            onEdit={(index) => history.push(`/names/${index}/update`)}
            />
    )
}

export default ContextualNameList