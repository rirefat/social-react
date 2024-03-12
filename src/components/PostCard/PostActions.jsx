import thumbIcon from '../../assets/icons/like-nonfilled.svg';
import likedIcon from '../../assets/icons/like-filled.svg';
import commentIcon from '../../assets/icons/comment.svg';
import shareIcon from '../../assets/icons/share.svg';
import { useContext, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { AuthContext } from '../Contexts/AuthContext';

const PostActions = ({ post }) => {
    const { auth } = useContext(AuthContext);
    const [isLike, setIsLike] = useState(post?.likes?.includes(auth?.user?.id));
    const { api } = useAxios();


    const handleLike = async () => {
        try {
            const response = await api.patch(`${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post?.id}/like`);

            if (response.status === 200) {
                setIsLike(true);
            }

        } catch (error) {
            console.log(error);
            setIsLike(false)
        }
    }

    return (
        <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
            {/* <!-- Like Button --> */}
            <button onClick={handleLike}
                className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
            >
                <img src={isLike ? likedIcon : thumbIcon} alt="Like" />
                <span>Like ({post?.likes?.length})</span>
            </button>

            {/* <!-- Comment Button --> */}
            <button
                className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm"
            >
                <img src={commentIcon} alt="Comment" />
                <span>Comment ({post?.comments?.length})</span>
            </button>
            {/* <!-- Share Button --> */}

            {/* <!-- Like Button --> */}
            <button
                className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
            >
                <img src={shareIcon} alt="Share" />
                <span>Share</span>
            </button>
        </div>
    );
};

export default PostActions;