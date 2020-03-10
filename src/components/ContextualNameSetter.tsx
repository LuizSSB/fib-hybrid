import React, { useContext } from 'react'
import NameSetter, { NameSetterProps } from './NameSetter'
import { AppContext } from '../contexts/AppContext'

const ContextualNameSetter: React.FC<NameSetterProps> = (
    props: NameSetterProps
) => {
    const [, dispatchAppData] = useContext(
        AppContext
    )
    return (
        <NameSetter
            {...props}
            onNameSet={(name) => {
                dispatchAppData({
                    action: { type: 'add', nameToInsert: name }
                })
                if(props.onNameSet) {
                    props.onNameSet(name)
                }
            }}
            />
    )
}

export default ContextualNameSetter