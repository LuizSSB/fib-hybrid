import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle } from '@ionic/react'
import { home, list } from 'ionicons/icons'
import React from 'react'
import { Redirect, Route } from 'react-router'
import Home from './Home'
import ListPage from './ListPage'

const TabsPage: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/tabs/list" component={ListPage} />
                <Route path="/tabs/home" component={Home} />
                <Route path="/tabs" render={() => <Redirect to="/tabs/home"/>}/>
            </IonRouterOutlet>
            <IonTabBar slot="bottom"  color="secondary">
                <IonTabButton tab="home" href="/tabs/home">
                    <IonTitle>Home</IonTitle>
                        <IonIcon icon={home} />
                </IonTabButton>
                <IonTabButton tab="list" href="/tabs/list">
                    <IonTitle>Lista</IonTitle>
                    <IonIcon icon={list} />
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default TabsPage