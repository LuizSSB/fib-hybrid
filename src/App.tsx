import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
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
import StartPage from './pages/StartPage';
import { NamesContextProvider } from './contexts/NamesContext';
import ListPage from './pages/ListPage';
import AddPage from './pages/AddPage';
import UpdatePage from './pages/UpdatePage';
import NameDialogs from './components/NameDialogs';

class Stuff {
  meth() {
    const fduncao = ()=> {
      console.log(
        (
          () => console.log(this)
        )()
      )
    }
    fduncao()
  }
}
new Stuff().meth()

const App: React.FC = () => (
  <IonApp>
    <NamesContextProvider>
      <IonReactRouter>
        <Route path="/">
          <NameDialogs />
        </Route>
        <IonRouterOutlet>
            <Route path="/home" component={Home} />
            <Route exact path="/" component={ListPage} />
            <Route exact path="/names" component={ListPage} />
            <Route exact path="/names/add" component={AddPage} />
            <Route exact path="/names/:userId/update" component={UpdatePage} />
        </IonRouterOutlet>
      </IonReactRouter>
    </NamesContextProvider>
  </IonApp>
);

export default App;
