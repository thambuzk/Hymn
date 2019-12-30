import { combineReducers } from './combineReducers';
import { songsReducer } from './songs/songs.reducer';

export const initialState: AppState = {
  data: {
    songs: [],
    songindex: [],
    loading: false
  }
};

export const reducers = combineReducers({
  data: songsReducer
});

export type AppState = ReturnType<typeof reducers>;