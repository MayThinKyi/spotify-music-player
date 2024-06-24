import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import PlayingSong from './PlayingSong'

const Layout = () => {
    return (
        <div className='flex'>
            <div className='w-[25%]'>
                <Sidebar />
            </div>
            <div className='w-[75%] p-4'>
                <Navbar />
                <Outlet />
            </div>
            <PlayingSong />
        </div>
    )
}

export default Layout
