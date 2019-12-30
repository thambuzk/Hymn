import {Song} from '../../models/Song';
import {SongIndex} from '../../models/SongIndex'

export interface SongsState {
    songs: Song[];
    songindex: SongIndex[];
    loading?: boolean;
}