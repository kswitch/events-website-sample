import Link from "next/link"
import styles from "./navbar.module.css"
import { useContext } from "react"
import { EventContextConsumer } from "../../utils/context"

function NavigationBar(): JSX.Element {
    const {getFeaturedEvents, getAllEvents} = useContext(EventContextConsumer)

    return (
        <div className={styles.navBar}>
            <Link onClick={getFeaturedEvents} className={styles.logo} href="/">NextEvents</Link>
            <Link onClick={getAllEvents} href="/events">Browse All Events</Link>
        </div>
    )

}

export default NavigationBar