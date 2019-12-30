import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Menu from './components/Menu';
import Home from './pages/Home';
import SongNumberList from './pages/SongNumberList';
import SongDetail from './pages/SongDetail';
import { home, list } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {loadSongData} from './data/songs/songs.actions'
import { AppContextProvider } from './data/AppContext';
import {connect} from './data/connect'
import {Song} from './models/Song'

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <SongsAppConnected />
    </AppContextProvider>
  );
};

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'Songs',
    url: '/home/songslist',
    icon: list
  }
];

interface StateProps {
  songs: Song[],
}

interface DispatchProps {
  loadSongData: typeof loadSongData;
}

interface SongsAppProps extends StateProps, DispatchProps { }

const SongsApp: React.FC<SongsAppProps> = ({ songs, loadSongData }) => {

  useEffect(() => {
    loadSongData();
    // eslint-disable-next-line
  }, []);

  return(
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/songslist" component={SongNumberList} exact={true} />
          <Route path="/home/songdetail/:id" component={SongDetail} />
          <Route path="/" render={() => <Redirect to="/home"/> } exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
  )
}

export default App;

const SongsAppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    songs: state.data.songs
  }),
  mapDispatchToProps: { loadSongData },
  component: SongsApp
});

