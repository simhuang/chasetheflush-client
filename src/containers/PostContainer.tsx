import React, { FunctionComponent, useState, useEffect} from 'react';

const PostContainer: FunctionComponent<PostContainerTypes> = ({post}) => {
    return (
        <>
            <div>hellowodfdrld</div>
            <div>{JSON.stringify(post)}</div>
            <div>{post.data.title}sfsdfjskdfskduh</div>
        </>
    )
}

type PostContainerTypes = {
    post: Object
}

export default PostContainer