import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar, IonSegment, IonSegmentButton } from '@ionic/react';
import React, { useState} from 'react';
import './SongNumberList.css';
import SongByNumber from '../components/SongByNumber';
import {Song} from '../models/Song'
import {connect} from '../data/connect'
import SongByIndex from '../components/SongByIndex';

interface OwnProps  { };

interface StateProps {
};

interface DispatchProps {};

interface SongNumberListProps extends OwnProps,StateProps,DispatchProps {};

const SongNumberListPage: React.FC<SongNumberListProps> = ({}) => {
  const [segment, setSegment] = useState<'number' | 'index' >('number');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonSegment onIonChange={(e) => setSegment(e.detail.value as any)}>
            <IonSegmentButton value="number" checked={segment === 'number'}>
            ഗാന നമ്പർ
            </IonSegmentButton>
            <IonSegmentButton value="index" checked={segment === 'index'}>
            സൂചിക
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
        
      </IonHeader>

      <IonContent>
        <SongByNumber hide={segment === 'index' }></SongByNumber>
        <SongByIndex hide={segment === 'number' }></SongByIndex>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  component: React.memo(SongNumberListPage)
});
