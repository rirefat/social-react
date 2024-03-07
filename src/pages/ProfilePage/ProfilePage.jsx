import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/Contexts/AuthContext";
import dummyAvatar from '../../assets/images/dummy-avatar.png';
import editIcon from '../../assets/icons/edit.svg';
import UsersPostCard from "./UsersPostCard";
import useAxios from "../../hooks/useAxios";
import Bio from "./Bio";
import { actions } from "../../actions";
import { useProfile } from "../../hooks/useProfile";

const ProfilePage = () => {
    const { state, dispatch } = useProfile();

    const { auth } = useContext(AuthContext);
    const { api } = useAxios();
    
    useEffect(() => {
        dispatch({ type: actions.profile.DATA_FETCHING });
        const fetchProfile = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`);
                if (response.status === 200) {
                    dispatch({
                        type: actions.profile.DATA_FETCHED,
                        data: response.data,
                    })
                }
            } catch (error) {
                console.log(error);
                dispatch({type: actions.profile.DATA_FETCH_ERROR, error: err.message})
            } 
        }

        fetchProfile();
    }, []);

    if (state?.loading) return <p className="text-center mt-10 text-slate-400 text-2xl">Fetching user data...</p>
    if (state?.error) return <p className="text-center text-red-400">Error occured fetching you data!!</p>

    return (
        <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
                {/* <!-- profile info --> */}
                <Bio />

                {/* <!-- post  --> */}
                {
                    state?.posts.map((post) => (
                        <UsersPostCard key={post.id} post={post} />
                    ))
                }

            </div>
        </main>
    );
};

export default ProfilePage;