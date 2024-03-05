import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Homepage from "../pages/Homepage/Homepage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import PrivateRouters from "./PrivateRouters";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <PrivateRouters><Homepage /></PrivateRouters> },
            { path: 'registration', element: <Registration /> },
            { path: 'login', element: <Login /> },
            { path: 'me', element: <PrivateRouters> <ProfilePage /> </PrivateRouters> },
        ]
    }
])

export default routers;