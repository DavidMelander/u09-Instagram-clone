import React from 'react'
import Post from './Post'

const posts = [
    {
        id: '123',
        username: "Michael Scott",
        userImg: 'http://cdn1.shl.se/photos/14/01/52e6030706f05d4f2800fe5dced8cba8/thumb_0.jpg',
        img: 'https://i0.wp.com/cebolaverde.com.br/wp-content/uploads/2022/02/michael-scott.jpg?fit=1200%2C675&ssl=1',
        caption: 'NOOOOOOOOOOOOOOOOOOOO!!!!!!!!!!!!!!!!!'
    },
    {
        id: '123',
        username: "Michael Scott",
        userImg: 'http://cdn1.shl.se/photos/14/01/52e6030706f05d4f2800fe5dced8cba8/thumb_0.jpg',
        img: 'https://i0.wp.com/cebolaverde.com.br/wp-content/uploads/2022/02/michael-scott.jpg?fit=1200%2C675&ssl=1',
        caption: 'NOOOOOOOOOOOOOOOOOOOO!!!!!!!!!!!!!!!!!'
    },
];

function Posts() {
  return (
    <div>
        {posts.map(post => (
            <Post key=
            {post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            />
        ))}
    </div>
  )
}

export default Posts
