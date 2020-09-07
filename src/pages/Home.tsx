import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import NameSetter from '../components/NameSetter';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>dasd</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer />
        <NameSetter
          label="Seu nome"
          placeholder="Digite seu nome"
        />
        <NameSetter
          label="Sua mãe"
          placeholder="Digite o nome da sua mãe"
          buttonTitle="Salvar sua mãe"
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
