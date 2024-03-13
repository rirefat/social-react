import React, { useReducer } from 'react';
import { ProfileContext } from '../components/Contexts/ProfileContext';
import { profileReducer } from '../reducers/profileReducers';

const ProfileProvider = ({children}) => {
    const [state, dispatch] = useReducer(profileReducer);

    return (
        <ProfileContext.Provider value={{state, dispatch}}>
            {children}
        </ProfileContext.Provider>
    );
};

export default ProfileProvider;