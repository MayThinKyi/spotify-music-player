import { useParams } from 'react-router-dom'
import { albums } from '../utils/data';
import logo from '../assets/images/logo.png'
import { FaRegClock } from 'react-icons/fa6';
import useSong from '../hooks/useSong';
const AlbumPage = () => {
  const { setCurrentSong } = useSong();
  const { albumId } = useParams();
  const album = albums.filter((album) => album.albumId == Number(albumId))[0]
  return (
    <div className='px-5 pt-5 pb-20'>
      <div className='flex items-center gap-8'>
        <img src={album.albumImage} className='h-[200px] w-[200px] rounded-lg' />
        <div>
          <p>Playlist</p>
          <h1 className="my-3 text-6xl font-bold">{album.albumName}</h1>
          <p>Your weekly update of the most played tracks</p>
          <div className='mt-4 flex items-center'>
            <img src={logo} className='me-3 w-[20px] h-[20px]' />
            <span>
              <span className="font-extrabold">Spotify</span> • 1,232,352 likes •
              <span className="font-extrabold">50 songs</span> , about 2hr 30 minutes</span>
          </div>
        </div>
      </div>
      <div className="px-5 border-b pb-4 grid grid-cols-4 text-center mt-10 ">
        <div className="flex  gap-4 items-center">
          <p className="font-bold">#</p>
          <p className="font-bold">Title</p>
        </div>
        <p className="font-bold">Album</p>
        <p className="font-bold">Date Added</p>
        <p className="font-bold flex justify-center  "><FaRegClock /></p>
      </div>
      {
        album.songs.map((song) => {
          return <div onClick={() => setCurrentSong(song)} key={song.songId} className="px-5 cursor-pointer hover:bg-[#444E5C] border-b py-2 text-center grid grid-cols-4">
            <div className="flex gap-3 items-center">
              <img src={song.songImage} className='w-[60px] h-[60px] rounded-lg' />
              <p className="font-bold">{song.sondName}</p>
            </div>
            <p className="font-bold mt-5">{album.albumName}</p>
            <p className="font-bold mt-5">5 days ago</p>
            <p className='mt-5'>{song.duration}</p>
          </div>
        })
      }
    </div>
  )
}

export default AlbumPage
