import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { AppContextProvider } from './contexts/AppContext';
import ListPage from './pages/ListPage';
import InsertPage from './pages/InsertPage';
import UpdatePage from './pages/UpdatePage';
import TabsPage from './pages/TabsPage';
import MenuPage from './pages/MenuPage';

class App extends React.Component {
  render() {
    return (
      <IonApp>
        <AppContextProvider>
          <IonSplitPane contentId="main">
            <MenuPage />
            <IonPage id="main">
              <IonReactRouter>
                <IonRouterOutlet>
                  <Route path="/home" component={Home} exact />
                  <Route path="/list" component={ListPage} exact />
                  <Route path="/insert" component={InsertPage} exact />
                  <Route path="/update/:idx" component={UpdatePage} exact />
                  <Route path="/tabs" component={TabsPage} />
                  <Route exact path="/" render={() => <Redirect to="/tabs/" />} />
                </IonRouterOutlet>
              </IonReactRouter>
            </IonPage>
          </IonSplitPane>
        </AppContextProvider>
      </IonApp>
    )
  }
}

// const App: React.FC = () => (
//   <IonApp>
//     <IonReactRouter>
//       <IonRouterOutlet>
//         <Route path="/home" component={Home} exact={true} />
//         <Route exact path="/" render={() => <Redirect to="/home" />} />
//       </IonRouterOutlet>
//     </IonReactRouter>
//   </IonApp>
// );

export default App;
