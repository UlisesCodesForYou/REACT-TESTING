import { useEffect, useState } from 'react';

const Async = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li> // This is gonna be tested.  I these don't pop up, they it faild
                ))}
            </ul>
        </div>
    );
};

export default Async;