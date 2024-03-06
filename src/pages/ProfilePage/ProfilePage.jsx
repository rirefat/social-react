import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Contexts/AuthContext";
import dummyAvatar from '../../assets/images/dummy-avatar.png';
import editIcon from '../../assets/icons/edit.svg';
import UsersPostCard from "./UsersPostCard";
import useAxios from "../../hooks/useAxios";
import Bio from "./Bio";

const ProfilePage = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { auth } = useContext(AuthContext);
    const { api } = useAxios();

    useEffect(() => {
        setLoading(true);
        const fetchProfile = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`);
                setUser(response?.data?.user);
                setPosts(response?.data?.posts);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchProfile();
    }, []);

    const fullName = user?.firstName + " " + user?.lastName;
    const email = user?.email;
    const bio = user?.bio;


    if (loading) return <p className="text-center mt-10 text-slate-400 text-2xl">Fetching user data...</p>
    if (error) return <p className="text-center text-red-400">Error occured fetching you data!!</p>

    return (
        <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
                {/* <!-- profile info --> */}
                <Bio user={user}/>
                {/* <!-- end profile info --> */}
                
                {/* <!-- post  --> */}
                {
                    posts.map((post) => (
                        <UsersPostCard key={post.id} post={post} user={user} />
                    ))
                }
                {/* <!-- post ends --> */}

            </div>
        </main>
    );
};

export default ProfilePage;