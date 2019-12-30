import { IonList, IonItemGroup,IonItemDivider,IonLabel,IonItem, IonRow, IonCol} from '@ionic/react';
import React from 'react';
import {Song} from '../models/Song'
import {SongIndex} from '../models/SongIndex'
import {connect} from '../data/connect'

interface OwnProps  { 
  hide: boolean;
};

interface StateProps {
  songs: Song[];
  songindex: SongIndex[];
};

interface DispatchProps {};

interface SongByOccasionProps extends OwnProps,StateProps,DispatchProps {};

/** @type {{search: React.CSSProperties}} */
const styles = {
    whitespace: {
        "white-space": "pre-wrap",
    }
}

const SongByOccasion: React.FC<SongByOccasionProps> = ({songs,songindex,hide}) => {
  if (!songs && !hide) {
    return <div>Song List Not Found</div>
  }

  return (
    <IonList style={hide ? { display: 'none' } : {}}>
    {songindex.map((group, index: number) => (
      <IonItemGroup key={`group-${index}`}>
        <IonItemDivider sticky >
          <IonLabel>
            {group.letter}
          </IonLabel>
        </IonItemDivider>
        {group.songlist.map(x => (
          <IonItem button detail={false} routerLink={`/home/songdetail/${x-1}`}>
          <IonLabel>
          {(x<60) ? songs[x-1].starting : ''} 
          </IonLabel>  
          <IonLabel>
          {x}
          </IonLabel>  
          </IonItem>
        ))}
      </IonItemGroup>
    ))}
  </IonList>
  );
};

export default connect({
  mapStateToProps: (state) => ({
    songs: state.data.songs,
    songindex: state.data.songindex
  }),
  mapDispatchToProps: ({
  }),
  component: SongByOccasion
});
