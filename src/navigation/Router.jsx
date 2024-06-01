import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Noticias from "../pages/Noticias";
import Premios from "../pages/Premios";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <NotFound/>,
    },
    {
        path: "/sobre",
        element: <Sobre/>
    },
    {
        path: "/premios",
        element: <Premios/>
    },
    {
        path: "/noticias",
        element: <Noticias/>
    }
])

function Router () {
    return (
        <RouterProvider router={router}/>
    )
}

export default Router;
