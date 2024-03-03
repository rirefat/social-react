import { useContext } from "react";
import { AuthContext } from "../../components/Contexts/AuthContext";


const Homepage = () => {
    const {auth, setAuth} = useContext(AuthContext);
    console.log(auth)
    return (
        <div>
            home page
        </div>
    );
};

export default Homepage;