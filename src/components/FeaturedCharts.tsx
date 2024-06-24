import { albums } from '../utils/data'
import { Link } from 'react-router-dom'

const FeaturedCharts = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl mb-3'>Featured Charts</h1>
            <div className="grid grid-cols-5 gap-10">
                {albums.map((album) => {
                    return <div className='cursor-pointer' key={album.albumId}>
                        <Link to={album.link}>
                            <img src={album.albumImage} className='rounded-xl' />
                            <h1 className="mt-2 mb-1 text-lg font-bold">{album.albumName}</h1>
                            <p className="text-sm font-semibold">Your weekly update of the most played tracks
                            </p>
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default FeaturedCharts
