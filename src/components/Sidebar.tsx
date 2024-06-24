import { BiLibrary } from 'react-icons/bi'
import { FaArrowRight, FaPlus } from 'react-icons/fa6'
import { IoMdHome } from 'react-icons/io'
import { IoSearchSharp } from 'react-icons/io5'

const Sidebar = () => {
    const data = [
        { id: 1, title: 'Create your first playlist', text: "It's easy we will help you" },
        { id: 2, title: "Let's find some podcasts to follow", text: "We'll update you on new episodes" },
    ]
    return (
        <div className='h-screen p-4'>
            <div className="flex items-center gap-2 mb-3">
                <IoMdHome size={25} />
                <p className='font-semibold'>Home</p>
            </div>
            <div className="flex items-center gap-2 mb-3">
                <IoSearchSharp size={25} />
                <p className='font-semibold'>Search</p>
            </div>
            <div className="mt-8 mb-5 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <BiLibrary size={35} />
                    <p className="font-semibold">Your Library</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaArrowRight />
                    <FaPlus />
                </div>
            </div>
            {data.map((item) => {
                return <div className='bg-[#242424]  mb-5 p-3 rounded-lg' key={item.id}   >
                    <h1 className=' text-sm font-semibold mb-2'>{item.title}</h1>
                    <p className='text-sm'>{item.text}</p>
                    <button className="mt-3 text-black bg-white py-2 px-10 rounded-full text-center">
                        <small className="font-bold">Get Started</small>
                    </button>
                </div>
            })}
        </div>
    )
}

export default Sidebar
