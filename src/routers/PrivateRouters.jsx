import { useContext } from "react";
import { AuthContext } from "../components/Contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRouters = ({ children }) => {

    const { auth } = useContext(AuthContext);

    if (auth && auth.user) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRouters;