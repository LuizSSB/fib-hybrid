import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import NameSetter from '../components/NameSetter';
import NameList from '../components/NameList';
import NameOrchestrator from '../components/NameOrchestrator';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Usuário</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <NameOrchestrator />
      </IonContent>
    </IonPage>
  );
};

export default Home;
