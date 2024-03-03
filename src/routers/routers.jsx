import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login/Login";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const routers = createBrowserRouter([
    {
        path: '/', 
        element:<App/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: 'login' , element:<Login/>}
        ]
    }
])

export default routers;