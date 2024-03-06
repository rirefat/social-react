import { useContext, useReducer } from "react";
import { AuthContext } from "../components/Contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { profileReducer } from "../reducers/profileReducers";
import { ProfileContext } from "../components/Contexts/ProfileContext";

const PrivateRouters = ({ children }) => {

    const { auth } = useContext(AuthContext);
    const [state, dispatch] = useReducer(profileReducer);

    if (auth && auth.user && auth.authToken) {

        return (
            <ProfileContext.Provider value={{state, dispatch}}>
                <Navbar />
                {children}
                <Footer/>
            </ProfileContext.Provider>
        )

    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRouters;