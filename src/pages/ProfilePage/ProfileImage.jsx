import dummyAvatar from '../../assets/images/dummy-avatar.png';
import editIcon from '../../assets/icons/edit.svg';
import { useProfile } from '../../hooks/useProfile';
import { useRef } from 'react';
import useAxios from '../../hooks/useAxios';

const ProfileImage = () => {
    const { state, dispatch } = useProfile();
    const fileUploadRef = useRef();
    const {api}= useAxios();

    const handleImageUpload = (event) => {
        event.preventDefault();
        fileUploadRef.current.addEventListener("change", uploadImage)
        fileUploadRef.current.click();
    }

    const uploadImage = async () => {
        try {
            const formData = new FormData();
            for (const file of fileUploadRef.current.files) {
                formData.append("avatar", file);
            }

            const response = await api.post(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}/avatar`, formData);

            if (response.status === 200) {
                dispatch({
                    type: actions.profile.IMAGE_UPDATED,
                    data: response.data
                })
            }

        } catch (error) {
            console.log(error);
            dispatch({
                type: actions.profile.DATA_FETCH_ERROR,
                error: error.message
            })
            console.log(error.message)
        }
    }

    return (
        <div
            className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]"
        >
            <img
                className="max-w-full rounded-full"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user.avatar}` || dummyAvatar}
                alt="User Profile Image"
            />

            <form>
                <button
                    onClick={handleImageUpload}
                    type='submit'
                    className="grid place-items-center absolute bottom-0 right-0 h-7 w-7 rounded-full bg-slate-700 hover:bg-slate-700/80"
                >
                    <img src={editIcon} alt="Edit" />
                </button>
                <input type="file" ref={fileUploadRef} hidden />
            </form>
        </div>
    );
};

export default ProfileImage;