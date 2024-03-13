import PostCard from "./PostCard"
import styles from "./postList.module.css"

const PostList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    )
}

export default PostList
