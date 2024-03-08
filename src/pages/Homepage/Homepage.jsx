import { useEffect, useReducer } from "react";
import { initialState, postReducer } from "../../reducers/postReducer";
import useAxios from "../../hooks/useAxios";
import { actions } from "../../actions";
import PostCard from "../../components/PostCard/PostCard";


const Homepage = () => {
    const [state, dispatch] = useReducer(postReducer, initialState);
    const { api } = useAxios();

    useEffect(() => {
        dispatch({ type: actions.post.DATA_FETCHING });

        const fetchPost = async () => {
            try {
                const response = await api.get(
                    `${import.meta.env.VITE_SERVER_BASE_URL}/posts`
                );
                if (response.status === 200) {
                    dispatch({
                        type: actions.post.DATA_FETCHED,
                        data: response.data,
                    });
                }
            } catch (error) {
                console.error(error);
                dispatch({
                    type: actions.post.DATA_FETCH_ERROR,
                    error: error.message,
                });
            }
        };

        fetchPost();
    }, []);


    if (state?.loading) {
        return <div> We are working...</div>;
    }

    if (state?.error) {
        return <div> Error in fatching posts {state?.error?.message}</div>;
    }


    return (
        <main class="mx-auto max-w-[1020px] py-8">
            <div class="container">
                {/* Crate new post area */}
                {/* <div className="card">
                <div className="flex-center mb-3 gap-2 lg:gap-4">
                    <img className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                        src="./assets/images/avatars/avatar_1.png" alt="avatar" />

                    <div className="flex-1">
                        <textarea className="h-16 w-full rounded-md bg-lighterDark p-3 focus:outline-none sm:h-20 sm:p-6" name="post"
                            id="post" placeholder="What's on your mind?"></textarea>
                    </div>
                </div>
            </div> */}

                {/* All posts section */}
                {
                    state?.posts.map((post) => (
                        <PostCard key={post?.id} post={post} />
                    ))
                }
            </div>
        </main>
    );
};

export default Homepage;