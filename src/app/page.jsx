import styles from "./page.module.css"
import Featured from "@/components/Featured"
import CategoryList from "@/components/CategoryList"
import PostList from "@/components/PostList"
import Menu from "@/components/Menu"

export default function Home () {
    return (
        <div className={styles.container}>
            <Featured />
            <CategoryList />
            <div className={styles.content}>
                <PostList />
                <Menu />
            </div>
        </div>
    )
}
