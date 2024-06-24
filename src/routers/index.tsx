import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomePage from "../pages/Home";
import AlbumPage from "../pages/Album";
import MusicsPage from "../pages/Musics";
import ProdcastsPage from "../pages/Prodcasts";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/album/:albumId',
                element: <AlbumPage />
            }
            ,
            {
                path: '/musics',
                element: <MusicsPage />
            },
            {
                path: '/prodcasts',
                element: <ProdcastsPage />
            }
        ]
    }
])

export default routers;