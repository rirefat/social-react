import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: 'registration', element: <Registration /> },
            { path: 'login', element: <Login/> },
        ]
    }
])

export default routers;