import { useState } from 'react';
import dummyAvatar from '../../assets/images/dummy-avatar.png';
import { useProfile } from '../../hooks/useProfile';

const PostComments = ({ comments }) => {
    const { state } = useProfile();
    const [showComments, setShowComments] = useState(false);

    return (
        <div>
            {/* <!-- comment input box --> */}
            <div className="flex-center mb-3 gap-2 lg:gap-4">
                <img
                    className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
                    alt="avatar"
                />

                <div className="flex-1">
                    <input
                        type="text"
                        className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
                        name="post"
                        id="post"
                        placeholder="What's on your mind?"
                    />
                </div>
            </div>
            {/* <!-- comment filter button --> */}
            <div className="mt-4">
                {
                    comments.length > 0 &&
                    <button onClick={() => setShowComments(prevState => !prevState)} className="text-gray-300 max-md:text-sm">
                        {showComments ? "Hide All ▲" : "All Comment ▾"}
                    </button>
                }
            </div>

            {/* <!-- comments --> */}
            {
                comments.length > 0 && showComments &&
                <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
                    {/* <!-- single comment --> */}
                    {
                        comments.map((comment) => (
                            <div key={comment.id} className="flex items-center gap-3 pt-4">
                                <img
                                    className="max-w-6 max-h-6 rounded-full"
                                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${comment?.author?.avatar}`}
                                    alt="avatar"
                                />
                                <div>
                                    <div className="flex gap-1 text-xs lg:text-sm">
                                        <span>{comment?.author?.name}: </span>
                                        <span>{comment?.comment}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {/* <!-- single comment ends --> */}
                </div>
            }
            {/* <!-- comments ends --> */}
        </div>
    );
};

export default PostComments;