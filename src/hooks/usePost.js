import { useContext } from "react";
import { PostContext } from "../components/Contexts/PostContext";


const usePost = () => {
    return  useContext(PostContext);
};

export default usePost;