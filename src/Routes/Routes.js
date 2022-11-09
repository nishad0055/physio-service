import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blogs/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceAdd from "../Pages/ServiceAdd/ServiceAdd";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoutes/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main> , errorElement: <ErrorPage></ErrorPage> , children:([
            {
                path: '/', element: <Home></Home>
            },
            {
                path:'/add/services' , element: <PrivateRoute><ServiceAdd></ServiceAdd></PrivateRoute>
            },
            {
                path: '/services', element: <AllServices></AllServices>,
                loader: ()=> fetch('http://localhost:5000/services')
            },
            {
              path: '/blog' , element: <Blog></Blog>
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
            },
            {
                path:'/myreviews', element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
           
        ])
    }
])