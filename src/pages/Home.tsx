import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import NameSetter from '../components/NameSetter';
import NameList from '../components/NameList';
import ContextualNameSetter from '../components/ContextualNameSetter';
import ContextualNameList from '../components/ContextuaNameList'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ContextualNameSetter 
          initialValue="Meu nome é"
          placeholder="Seu nome"
          buttonTitle="Definir seu nome" />
        <ContextualNameList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
