import { useContext } from "react";
import { AuthContext } from "../../components/Contexts/AuthContext";
import { Link } from "react-router-dom";


const Homepage = () => {
    const {auth, setAuth} = useContext(AuthContext);
    console.log(auth)
    return (
        <div>
            <p>home page</p>
            <Link to="/me">Profile Page</Link>
        </div>
    );
};

export default Homepage;