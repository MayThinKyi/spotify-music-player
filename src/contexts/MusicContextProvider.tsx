import React, { PropsWithChildren, createContext, useState } from 'react'
import { Song, songs } from '../utils/data';

export interface IMusicContext {
    currentSong: Song;
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>;
}

export const MusicContext = createContext<IMusicContext | null>(null);

const MusicContextProvider = ({ children }: PropsWithChildren) => {
    const [currentSong, setCurrentSong] = useState<Song>(songs[0])
    const value = {
        currentSong, setCurrentSong
    }
    return (
        <MusicContext.Provider value={value}>
            {children}
        </MusicContext.Provider>
    )
}

export default MusicContextProvider
