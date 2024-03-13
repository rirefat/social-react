import React, { useReducer } from 'react';
import { PostContext } from '../components/Contexts/PostContext';
import { initialState, postReducer } from '../reducers/postReducer';

const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postReducer, initialState);
    return (
        <PostContext.Provider value={{ state, dispatch }}>
            {children}
        </PostContext.Provider>
    );
};

export default PostProvider;