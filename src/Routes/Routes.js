import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ServiceAdd from "../Pages/ServiceAdd/ServiceAdd";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main> , children:([
            {
                path: '/', element: <Home></Home>
            },
            {
                path:'/add/services' , element: <ServiceAdd></ServiceAdd>
            }
        ])
    }
])