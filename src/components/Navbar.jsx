import Image from "next/image"
import styles from "./navbar.module.css"
import Link from "next/link"
import AuthLinks from "./AuthLinks"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
                <Image src="/youtube.png" alt="facebook" width={24} height={24}/>
            </div>
            <div className={styles.logo}>CFernando</div>
            <div className={styles.links}>
                <ThemeToggle />
                <Link href="/home" className={styles.link}>Homepage</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>
                <Link href="/about" className={styles.link}>About</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar
