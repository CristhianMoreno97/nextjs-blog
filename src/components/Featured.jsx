import Image from "next/image"
import styles from "./featured.module.css"

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Cristhian Moreno here!</b> Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image className={styles.image} src='/landscape-3.jpg' alt="" fill />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Post title</h1>
                    <p className={styles.postDescription}>
                        Post description. Loremp ipsum dolor sit, amet consectetur adipsicising
                    </p>
                    <button className={styles.button}>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
