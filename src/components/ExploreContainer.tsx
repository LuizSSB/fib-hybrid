import React from 'react';
import './ExploreContainer.css';
import { IonButton, IonInput } from '@ionic/react';

interface ContainerProps { }

const obj = {
  name: 'READY',
  content: "CONTEUDO"
}

let texto = ''

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container" style={{
    }}>
      <strong>{obj.name}</strong>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
