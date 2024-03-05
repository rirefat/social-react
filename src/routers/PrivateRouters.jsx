import { useContext } from "react";
import { AuthContext } from "../components/Contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const PrivateRouters = ({ children }) => {

    const { auth } = useContext(AuthContext);

    if (auth && auth.user && auth.authToken) {

        return (
            <>
                <Navbar />
                {children}
                <Footer/>
            </>
        )

    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRouters;