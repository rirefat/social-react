import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login/Login";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Registration from "../components/Registration/Registration";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'registration', element: <Registration /> },
        ]
    }
])

export default routers;