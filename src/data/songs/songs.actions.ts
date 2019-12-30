import {getSongData} from '../dataApi';
import { ActionType } from '../../util/types';
import {SongsState} from './songs.state';

export const loadSongData = () => async (dispatch: React.Dispatch<any>) => {
    dispatch(setLoading(true));
    const data = await getSongData();
    dispatch(setData(data));
    dispatch(setLoading(false));
  }

export const setLoading = (isLoading: boolean) => ({
  type: 'set-conf-loading',
  isLoading
} as const);

export const setData = (data: Partial<SongsState>) => ({
    type: 'set-conf-data',
    data
  } as const);

  export type SongsActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setData>