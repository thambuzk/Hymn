
import { createSelector } from 'reselect';
import { AppState } from './state';

const getSongs = (state: AppState) => state.data.songs;

const getIdParam = (_state: AppState, props: any) => {
    const stringParam = props.match.params['id'];
    return parseInt(stringParam, 10);
  }

export const getSong = createSelector(
    getSongs, getIdParam,
    (songs, id) => songs.find(x => x.id === id)
);
