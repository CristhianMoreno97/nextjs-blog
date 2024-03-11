import Link from "next/link"
import styles from "./authLinks.module.css"

const AuthLinks = () => {
    const status = "unauthenticated"

    return (
        <>
            {
                status === "unauthenticated"
                    ? (<Link href="/login">Login</Link>)
                    : (<>
                        <Link href="/write">Write</Link>
                        <span className={styles.link}>logout</span>
                    </>)
            }
        </>
    )
}

export default AuthLinks
