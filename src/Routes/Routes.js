import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ServiceAdd from "../Pages/ServiceAdd/ServiceAdd";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main> , children:([
            {
                path: '/', element: <Home></Home>
            },
            {
                path:'/add/services' , element: <ServiceAdd></ServiceAdd>
            },
            {
                path: '/services', element: <AllServices></AllServices>,
                loader: ()=> fetch('http://localhost:5000/services')
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <Signup></Signup>
            },
            {
                path:'/services/:id', element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ])
    }
])