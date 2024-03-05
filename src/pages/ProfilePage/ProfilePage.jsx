import { useContext } from "react";
import { AuthContext } from "../../components/Contexts/AuthContext";
import dummyAvatar from '../../assets/images/dummy-avatar.png';
import editIcon from '../../assets/icons/edit.svg';
import UsersPostCard from "./UsersPostCard";

const ProfilePage = () => {
    const { auth } = useContext(AuthContext);

    const fullName = auth?.user?.firstName + " " + auth?.user?.lastName;
    const email = auth?.user?.email;
    const bio = auth?.user?.bio;
    const avatar = auth?.user?.avatar;

    return (
        <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
                {/* <!-- profile info --> */}
                <div className="flex flex-col items-center py-8 text-center">
                    {/* <!-- profile image --> */}
                    <div
                        className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]"
                    >
                        <img
                            className="max-w-full"
                            src={dummyAvatar}
                            alt={fullName}
                        />

                        <button
                            className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
                        >
                            <img src={editIcon} alt="Edit" />
                        </button>
                    </div>
                    {/* <!-- name , email --> */}
                    <div>
                        <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
                            {fullName}
                        </h3>
                        <p className="leading-[231%] lg:text-lg">{email}</p>
                    </div>

                    {/* <!-- bio --> */}
                    <div className="mt-4 flex items-start gap-2 lg:mt-6">
                        <div className="flex-1">
                            <p className="leading-[188%] text-gray-400 lg:text-lg">{bio}</p>
                        </div>
                        {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
                        <button className="flex-center h-7 w-7 rounded-full">
                            <img src={editIcon} alt="Edit" />
                        </button>
                    </div>
                    <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
                </div>
                {/* <!-- end profile info --> */}

                <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4>

                {/* <!-- post  --> */}
                <UsersPostCard
                    fullName={fullName}
                    avatar={avatar}
                />
                {/* <!-- post ends --> */}

            </div>
        </main>
    );
};

export default ProfilePage;