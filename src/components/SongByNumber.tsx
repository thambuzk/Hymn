import { IonItem, IonGrid, IonRow, IonCol} from '@ionic/react';
import React from 'react';
import {Song} from '../models/Song'
import {connect} from '../data/connect'

interface OwnProps  { 
  hide: boolean;
};

interface StateProps {
  songs: Song[];
};

interface DispatchProps {};

interface SongByNumberProps extends OwnProps,StateProps,DispatchProps {};

const SongByNumber: React.FC<SongByNumberProps> = ({songs,hide}) => {
  if (!songs && !hide) {
    return <div>Song List Not Found</div>
  }

  return (
        <IonGrid style={hide ? { display: 'none' } : {}}>
        <IonRow>
          {
            songs.map(x=>
            <IonCol>
              <IonItem button detail={false} routerLink={`/home/songdetail/${x.id}`}>{x.id+1}</IonItem>
            </IonCol>
            )
          }
        </IonRow> 
        </IonGrid>
  );
};

export default connect({
  mapStateToProps: (state) => ({
    songs: state.data.songs,
  }),
  mapDispatchToProps: ({
  }),
  component: SongByNumber
});
