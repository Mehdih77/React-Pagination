import React from 'react';

export default function Posts({ posts }) {

    return (
        <>
            { posts && 
                posts.map( post => (
                        <p className='list-group-item' key={post.id} >
                            {post.title}
                        </p>
                ))
            }
        </>
    )
}
