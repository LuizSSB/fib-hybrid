import React, { useReducer, useState } from 'react'

export type NamesData = {
    names: string[]
    dialogState?: 'added' | 'deleted' | 'updated'
}

// export interface NamesData {
//     names: string[]
// }

const DEFAULT_NAMESDATA: NamesData = {
    names: [
        'fulano', 'ciclano', 'beltrano', 'luiz', 'foo', 'bar', 'baz'
    ]
}

export type NamesDataAction =
    { type: 'add', nameToAdd: string } |
    { type: 'delete', indexToDelete: number } |
    { type: 'update', indexToUpdate: number, newName: string}

export const NamesContext = React.createContext<
    [NamesData, React.Dispatch<NamesDataAction>]
>([DEFAULT_NAMESDATA, () => {}])

export const NamesContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children
}: React.PropsWithChildren<{}>) => {
    // const [name, setName] = useReducer(
    //     (_currentName: string, newName: string) => newName,
    //     ''
    // )
    // const [name, setName] = useState('')

    const reducer = useReducer(
        (currentState: NamesData, action: NamesDataAction) => {
            switch (action.type) {
                case 'add': {
                    const newState: NamesData = {
                        ...currentState,
                        names: [action.nameToAdd, ...currentState.names],
                        dialogState: 'added'
                    }
                    return newState
                }
                case 'delete': {
                    const names = [...currentState.names]
                    names.splice(action.indexToDelete, 1)
                    const newState: NamesData = {
                        ...currentState,
                        names,
                        dialogState: 'deleted'
                    }
                    return newState
                }
                case 'update':
                    const names = [...currentState.names]
                    names.splice(action.indexToUpdate, 1, action.newName)
                    const newState: NamesData = {
                        ...currentState,
                        names,
                        dialogState: 'updated'
                    }
                    return newState
            }

            return currentState
        },
        DEFAULT_NAMESDATA
    )

    return (
        <NamesContext.Provider value={reducer}>
            {children}
        </NamesContext.Provider>
    )
}