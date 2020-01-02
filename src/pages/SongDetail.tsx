import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonBackButton, IonButton, IonMenu, IonText, IonTabButton, IonFab, IonFabButton, IonFabList, IonFooter, IonIcon, IonList, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './SongDetail.css';
import { Song } from '../models/Song'
import { connect } from '../data/connect'
import * as selectors from '../data/selectors'
import { arrowDropleftCircle, arrowDroprightCircle, musicalNotes, addCircleOutline } from 'ionicons/icons';

interface OwnProps extends RouteComponentProps {
  song?: Song;
};

interface StateProps { };

interface DispatchProps { };

interface SongDetailProps extends OwnProps, StateProps, DispatchProps { };

const SongDetailPage: React.FC<SongDetailProps> = ({ song }) => {
  if (!song) {
    return <div>Song not found</div>
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
            <IonBackButton defaultHref="/home/songslist" />
          </IonButtons>
          <IonTitle>ഗാനം {song.id + 1}</IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
          <p className="multiline">
          {song.lyrics}
          </p>
          </IonItem>
          <IonItem>
          {/* <IonIcon slot="start" icon={musicalNotes} /> */}
          <IonLabel>
          <IonIcon slot="start" icon={musicalNotes} />
          Music
          </IonLabel>
          <IonButton >
              <IonLabel>Add Music</IonLabel>
              <IonIcon  icon={addCircleOutline} />
          </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton  routerLink={`/home/songdetail/${song.id - 1}`}>
              <IonIcon  icon={arrowDropleftCircle} />
            </IonButton>
          </IonButtons>
          <IonButtons  slot="primary">
            <IonButton routerLink={`/home/songdetail/${song.id + 1}`}>
              <IonIcon  icon={arrowDroprightCircle} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default connect({
  mapStateToProps: (state, ownProps) => ({
    song: selectors.getSong(state, ownProps)
  }),
  component: SongDetailPage
});

