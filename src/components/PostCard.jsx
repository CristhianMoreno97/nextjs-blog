import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image className={styles.image} src="/p1.jpeg" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </Link>
                <p className={styles.description}>
                    Al contrario del pensamiento popular, el texto de Lorem Ipsum
                    no es simplemente texto aleatorio. Tiene sus raices en una
                    pieza clásica de la literatura del Latin, que data del año
                    45 antes de Cristo, haciendo que este adquiera mas de 2000 años
                    de antiguedad.
                </p>
                <Link className={styles.link} href="/">Read More</Link>
            </div>
        </div>
    )
}

export default PostCard
