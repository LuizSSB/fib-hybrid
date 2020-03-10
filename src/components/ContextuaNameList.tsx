import React, { useContext } from 'react'
import NameList from './NameList'
import { AppContext } from '../contexts/AppContext'
import { useHistory } from 'react-router'

const ContextualNameList: React.FC = () => {
    const [appData, dispatchAppData] = useContext(AppContext)
    const history = useHistory()

    return (
        <NameList
            names={appData.names}
            onDelete={(at) => {
                // dispatchAppData({
                //     action: {
                //         type: 'delete', indexToDelete: at
                //     }
                // })
                history.push(`/update/${at}`)
            }}
            />
    )
}

export default ContextualNameList