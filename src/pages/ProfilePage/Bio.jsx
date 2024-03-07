import dummyAvatar from '../../assets/images/dummy-avatar.png';
import editIcon from '../../assets/icons/edit.svg';
import checkIcon from '../../assets/icons/check.svg';
import { useProfile } from '../../hooks/useProfile';
import { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { actions } from '../../actions';

const Bio = () => {
    const { state, dispatch } = useProfile();
    const { api } = useAxios();

    const [bio, setBio] = useState(state?.user?.bio);
    const [editBio, setEditBio] = useState(false);
    const [error, setError] = useState(false);

    const fullName = state?.user?.firstName + " " + state?.user?.lastName;
    const email = state?.user?.email;

    const handleUpdateBio = async () => {
        dispatch({ type: actions.profile.DATA_FETCHING });

        try {
            const response = await api.patch(
                `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id
                }`,
                { bio }
            );

            if (response.status === 200) {
                dispatch({
                    type: actions.profile.USER_DATA_EDITED,
                    data: response.data,
                });
            }
            setEditBio(false);
        } catch (err) {
            dispatch({
                type: actions.profile.DATA_FETCH_ERROR,
                error: err.message,
            });
        }
    }

    return (
        <div className="flex flex-col items-center py-8 text-center">
            {/* <!-- profile image --> */}
            <div
                className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]"
            >
                <img
                    className="max-w-full rounded-full"
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user.avatar}` || dummyAvatar}
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
                    {
                        (editBio) ? <textarea
                            value={bio}
                            cols={70}
                            rows={5}
                            onChange={(event) => setBio(event.target.value)}
                            className='bg-[#27292F] px-6 py-4 rounded-md text-gray-300'
                        /> : <p className="leading-[188%] text-gray-400 lg:text-lg">{bio}</p>
                    }
                </div>
                {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
                <button className="flex-center h-7 w-7 rounded-full">
                    {
                        (editBio) ? <img src={checkIcon} alt="Edit" onClick={handleUpdateBio} /> : <img src={editIcon} alt="Edit" onClick={() => setEditBio(true)} />

                    }

                </button>
            </div>
            <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
        </div>
    );
};

export default Bio;