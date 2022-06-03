import React, { FunctionComponent } from 'react';

const PostContainer: FunctionComponent<PostContainerTypes> = ({post}) => {
    return (
        <>
            <div>hellowodfdrld</div>
            <div>{post.title}</div>
            <div>{post.content}</div>
            <div>{post.upvotes}</div>
            <div>{post.commentCount}</div>
            <div>{post.created}</div>
        </>
    )
}

type PostContainerTypes = {
    post: Object
}

export default PostContainer