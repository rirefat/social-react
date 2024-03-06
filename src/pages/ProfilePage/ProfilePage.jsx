import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Contexts/AuthContext";
import dummyAvatar from '../../assets/images/dummy-avatar.png';
import editIcon from '../../assets/icons/edit.svg';
import UsersPostCard from "./UsersPostCard";
import useAxios from "../../hooks/useAxios";
import Bio from "./Bio";
import { ProfileContext } from "../../components/Contexts/ProfileContext";
import { actions } from "../../actions";

const ProfilePage = () => {
    // const [user, setUser] = useState({});
    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const { state, dispatch } = useContext(ProfileContext);

    const { auth } = useContext(AuthContext);
    const { api } = useAxios();
    
    useEffect(() => {
        // setLoading(true);
        dispatch({ type: actions.profile.DATA_FETCHING });
        const fetchProfile = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`);
                // setUser(response?.data?.user);
                // setPosts(response?.data?.posts);
                if (response.status === 200) {
                    dispatch({
                        type: actions.profile.DATA_FETCHED,
                        data: response.data,
                    })
                }
            } catch (error) {
                console.log(error);
                // setError(error);
                dispatch({type: actions.profile.DATA_FETCH_ERROR, error: err.message})
            } 
            // finally {
            //     setLoading(false);
            // }
        }

        fetchProfile();
    }, []);

    const fullName = state?.user?.firstName + " " + state?.user?.lastName;
    const email = state?.user?.email;
    const bio = state?.user?.bio;


    if (state?.loading) return <p className="text-center mt-10 text-slate-400 text-2xl">Fetching user data...</p>
    if (state?.error) return <p className="text-center text-red-400">Error occured fetching you data!!</p>

    return (
        <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
                {/* <!-- profile info --> */}
                {/* <Bio user={state?.user} /> */}
                <p>welcome {fullName}</p>
                {/* <!-- end profile info --> */}

                {/* <!-- post  --> */}
                {
                    // state?.posts.map((post) => (
                    //     <UsersPostCard key={post.id} post={post} user={user} />
                    // ))
                }
                {/* <!-- post ends --> */}

            </div>
        </main>
    );
};

export default ProfilePage;