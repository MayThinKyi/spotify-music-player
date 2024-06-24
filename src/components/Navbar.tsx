import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const { pathname } = useLocation();
    const tabs = [
        { name: 'All', link: '/' },
        { name: 'Musics', link: '/musics' },
        { name: 'Prodcasts', link: '/prodcasts' },
    ]
    const isActiveTab = (link: string) => {
        return pathname === link;
    }
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className='flex gap-3 cursor-pointer'>
                    <div onClick={() => history.back()} className="bg-[#242424] text-white p-1 rounded-full">
                        <IoIosArrowBack size={25} />
                    </div>
                    <div className=' bg-[#242424] text-white p-1 rounded-full'>
                        <IoIosArrowForward size={25} />
                    </div>
                </div>
                <div className='flex gap-3 cursor-pointer'>
                    <button className="text-black  bg-white font-bold py-1 px-5 rounded-full">
                        Explore Premium
                    </button>
                    <button className="bg-black  text-white font-bold py-1 px-5 rounded-full">
                        Install App
                    </button>
                    <div className='bg-[#F97316] text-zinc-800 font-bold rounded-full py-[6px] px-3 '>
                        M
                    </div>
                </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
                {tabs.map((tab, index) => {
                    return <Link to={tab.link} className={`${isActiveTab(tab.link) ? 'bg-white text-black' : 'bg-[#242424]'} py-1 px-4 rounded-full font-semibold`} key={index}>
                        {tab.name}
                    </Link>
                })}
            </div>

        </div>
    )
}

export default Navbar
