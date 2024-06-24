import FeaturedCharts from '../components/FeaturedCharts'
import TodayHits from '../components/TodayHits'

const HomePage = () => {
    return (
        <div className='py-5'>
            <FeaturedCharts />
            <TodayHits />
        </div>
    )
}

export default HomePage
