import React from 'react';
import { useProfile } from '../../hooks/useProfile';

import timeIcon from '../../assets/icons/time.svg';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostActions from './PostActions';
import PostComments from './PostComments';

const PostCard = ({post}) => {
    const {state, dispatch}=useProfile();
    const fullName = state?.user?.firstName + " " + state?.user?.lastName;
    return (
        <article className="card mt-6 lg:mt-8">
            <PostHeader/>
            <PostBody post={post}/>
            <PostActions post={post}/>
            <PostComments/>
        </article>
    );
};

export default PostCard;