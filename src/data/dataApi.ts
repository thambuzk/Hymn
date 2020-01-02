import {Song} from '../models/Song';
import {SongIndex} from '../models/SongIndex'

const songindexUrl = 'assets/data/SongIndex.json';
const songlyricspath = 'assets/data/Songs/combined.txt';

export const getSongData = async () => {
    const response = await Promise.all([
        fetch(songindexUrl)]);
    var songcombinedtext = readTextFile(songlyricspath);

    const songs = songcombinedtext.split("|").map(
        (songtext,id) => ({
            id: id,
            lyrics: (id===339 || id===303 || id===8 || id===116 || id===264 || id===256 || id===435 || id===26 || id===302) ? songtext.replace("X","").replace("Z","").replace(/^\s+|\s+$/g, '') : songtext.replace("A","").replace("B","").replace(/^\s+|\s+$/g, ''),
            starting: (id===339 || id===303 || id===8 || id===116 || id===264 || id===256 || id===435 || id===26 || id===302) ? songtext.substring(songtext.indexOf("X")+1,songtext.indexOf("Z")) : songtext.substring(songtext.indexOf("A")+1,songtext.indexOf("B"))
        })
    ) as Song[];

    console.log(songs);
    
    const songindex = await response[0].json() as SongIndex[];

    const data = {
        songs,
        songindex
    }
    return data;
}

function readTextFile(file: string)
{
    var allText = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
              allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}

