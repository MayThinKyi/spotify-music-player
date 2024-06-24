import useSong from '../hooks/useSong';
import { songs } from '../utils/data'

const TodayHits = () => {
    const { setCurrentSong } = useSong();
    const fiveSongs = songs.slice(0, 5);
    return (
        <div className='my-10'>
            <h1 className='font-bold text-2xl mb-3'>Today Hits</h1>
            <div className="grid grid-cols-5 gap-10">
                {fiveSongs.map((song) => {
                    return <div onClick={() => setCurrentSong(song)} className='cursor-pointer' key={song.songId}>
                        <img src={song.songImage} className='rounded-xl' />
                        <h1 className="mt-2 mb-1 text-lg font-bold">{song.sondName}</h1>
                        <p className="text-sm font-semibold">{song.artist}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TodayHits
