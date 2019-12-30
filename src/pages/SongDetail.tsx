import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonBackButton } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import './SongDetail.css';
import {Song} from '../models/Song'
import {connect} from '../data/connect'
import * as selectors from '../data/selectors'
import { songsReducer } from '../data/songs/songs.reducer';

interface OwnProps extends RouteComponentProps {
  song?: Song;
};

interface StateProps {};

interface DispatchProps {};

interface SongDetailProps extends OwnProps, StateProps, DispatchProps {};

const SongDetailPage: React.FC<SongDetailProps> = ({song}) => {
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
          <IonTitle>ഗാനം</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <p className="multiline">
        {song.lyrics}
        </p>
      </IonContent>
    </IonPage>
  );
};

export default connect({
  mapStateToProps: (state, ownProps) => ({
    song: selectors.getSong(state, ownProps)
  }),
  component: SongDetailPage
});

