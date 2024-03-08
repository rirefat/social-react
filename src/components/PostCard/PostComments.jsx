import dummyAvatar from '../../assets/images/dummy-avatar.png';

const PostComments = () => {
    return (
        <div>
            {/* <!-- comment input box --> */}
            <div className="flex-center mb-3 gap-2 lg:gap-4">
                <img
                    className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
                    src={dummyAvatar}
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
                <button className="text-gray-300 max-md:text-sm">
                    All Comment ▾
                </button>
            </div>
            {/* <!-- comments --> */}
            <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
                {/* <!-- single comment --> */}
                <div className="flex items-center gap-3 pt-4">
                    <img
                        className="max-w-6 max-h-6 rounded-full"
                        src={dummyAvatar}
                        alt="avatar"
                    />
                    <div>
                        <div className="flex gap-1 text-xs lg:text-sm">
                            <span>Tapas Adhikari: </span>
                            <span>Great Sumit Saha dada ❤</span>
                        </div>
                    </div>
                </div>
                {/* <!-- single comment ends --> */}

                {/* <!-- single comment --> */}
                <div className="flex items-center gap-3 pt-4">
                    <img
                        className="max-w-6 max-h-6 rounded-full"
                        src={dummyAvatar}
                        alt="avatar"
                    />
                    <div>
                        <div className="flex gap-1 text-xs lg:text-sm">
                            <span>Sumit Saha: </span>
                            <span>Great Sumit Saha dada ❤</span>
                        </div>
                    </div>
                </div>
                {/* <!-- single comment ends --> */}
            </div>
            {/* <!-- comments ends --> */}
        </div>
    );
};

export default PostComments;