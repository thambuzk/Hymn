import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React from 'react';
import './Home.css';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/shapes.svg" alt="" />
          <IonCardHeader>
            <IonCardTitle>മലയാള പാട്ടു പുസ്തകം</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              സൗത്ത് ഇന്ത്യയിലെ പള്ളിയിലെ ഗാനങ്ങളുടെ ശേഖരം.
            </p>
          </IonCardContent>
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default HomePage;
