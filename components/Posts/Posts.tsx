import Post from '../Post/Post';

const Posts = ({posts}) => {
    return (
        <div itemScope itemType="https://schema.org/Blog">
            { posts.map((post) => {
                return <Post key={post.id} post={post} />
            })}
        </div>
    )
    
}

export default Posts;
