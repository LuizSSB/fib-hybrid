import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import NameSetter from '../components/NameSetter';
import NameList from '../components/NameList';
import NameOrchestrator from '../components/NameOrchestrator';
import { chevronBack } from 'ionicons/icons';
import { useHistory } from 'react-router';

const Home: React.FC = () => {
  const history = useHistory()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* <IonButton onClick={() => history.goBack()}>
              <IonIcon icon={chevronBack} />
            </IonButton> */}
            <IonBackButton />
          </IonButtons>
          <IonTitle>Usuáriox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <NameOrchestrator />
      </IonContent>
    </IonPage>
  );
};

export default Home;
