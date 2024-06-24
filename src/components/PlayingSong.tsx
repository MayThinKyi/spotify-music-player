import { IoPlay } from 'react-icons/io5';
import { songs } from '../utils/data'
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from 'react-icons/tb';
import { FaPause, FaShuffle } from 'react-icons/fa6';
import { FiRepeat } from 'react-icons/fi';
import { BsFillFilePlayFill, BsMusicPlayerFill, BsTextareaResize } from 'react-icons/bs';
import { LuMic2 } from 'react-icons/lu';
import { AiFillSound } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import useSong from '../hooks/useSong';

const PlayingSong = () => {
    const { currentSong, setCurrentSong } = useSong();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);
    const [currentMins, setCurrentMins] = useState(0);
    const [currentSecs, setCurrentSecs] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const playHandler = () => {
        audioRef.current?.play()
        setIsPlaying(true);
    }
    const pauseHandler = () => {
        audioRef.current?.pause();
        setIsPlaying(false);
    }
    const loadedmetadata = () => {
        const m = Math.floor(audioRef.current?.duration! / 60);
        setMins(m);
        setSecs(Math.floor(audioRef.current?.duration! - m * 60))
    };
    const timeupdate = () => {
        audioRef.current?.addEventListener('timeupdate', () => {
            setCurrentMins(Math.floor(audioRef.current?.currentTime! / 60))
            setCurrentSecs(Math.floor(audioRef.current?.currentTime! % 60))
            setPercentage(Math.floor(audioRef.current?.currentTime! / audioRef.current?.duration!) * 100);
            setPercentage(audioRef.current?.currentTime! / audioRef.current?.duration! * 100)
        })
    }
    const prevHandler = () => {
        if (currentSong.songId > 1) {
            setCurrentSong(songs.filter((song) => song.songId === currentSong.songId - 1)[0])
        }
    }
    const nextHandler = () => {
        if (currentSong.songId < songs.length) {
            setCurrentSong(songs.filter((song) => song.songId === currentSong.songId + 1)[0])
        }
    }

    useEffect(() => {
        if (isPlaying) playHandler()
        else pauseHandler()
        audioRef.current?.addEventListener('loadedmetadata', loadedmetadata);
        audioRef.current?.addEventListener('timeupdate', timeupdate)
        return () => {
            audioRef.current?.removeEventListener('loadedmetadata', loadedmetadata)
            audioRef.current?.addEventListener('timeupdate', timeupdate)
        }
    }, [currentSong])

    return (
        <div className='py-2 px-5 flex items-center justify-between w-screen bg-black fixed bottom-0 left-0 right-0 z-10'>
            <div className="flex items-center gap-4">
                <img src={currentSong.songImage} className='w-[60px] h-[60p]x rounded-lg' />
                <div>
                    <p className="text-lg font-bold">{currentSong.sondName}</p>
                    <p className="text-sm font-bold">{currentSong.artist}</p>
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center gap-5 cursor-pointer">
                    <FaShuffle size={22} />
                    <TbPlayerTrackPrevFilled size={22} onClick={prevHandler} />

                    {isPlaying ?
                        <FaPause onClick={pauseHandler} size={22} /> :
                        <IoPlay onClick={playHandler} size={22} />
                    }
                    <TbPlayerTrackNextFilled onClick={nextHandler} size={22} />
                    <FiRepeat size={22} />
                </div>
                <div className="flex items-center gap-5 ">
                    <p>
                        {currentMins < 10 ? '0' + currentMins : currentMins} :
                        {currentSecs < 10 ? '0' + currentSecs : currentSecs}
                    </p>

                    <audio hidden key={currentSong.songId} ref={audioRef} controls onEnded={() => {
                        // setIsPlaying(false)
                        if (currentSong.songId === 8) {
                            return setCurrentSong(songs.filter((song) => song.songId === 1)[0]);
                        }
                        setCurrentSong(songs.filter((song) => song.songId === currentSong.songId + 1)[0]);
                    }} >
                        <source src={currentSong.song} />
                    </audio>
                    <div className='bg-slate-300 cursor-pointer overflow-hidden w-[500px] h-[6px] rounded-lg'>
                        <div style={{ width: percentage + '%' }} className={` bg-green-700 h-[6px]`}></div>
                    </div>
                    <p>
                        {mins < 10 ? '0' + mins : mins} :
                        {secs < 10 ? '0' + secs : secs}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2 pe-5">
                <BsFillFilePlayFill size={18} />
                <LuMic2 size={18} />
                <BsMusicPlayerFill size={18} />
                <AiFillSound size={18} />
                <BsTextareaResize size={18} />
            </div>
        </div>
    )
}

export default PlayingSong
