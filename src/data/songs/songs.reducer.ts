import { SongsActions } from './songs.actions';
import { SongsState } from './songs.state';

export const songsReducer = (state: SongsState, action: SongsActions): SongsState => {
  switch (action.type) {
    case 'set-conf-loading': {
      return { ...state, loading: action.isLoading };
    }
    case 'set-conf-data': {
      return { ...state, ...action.data };
    }
}
}
