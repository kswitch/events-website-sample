import styles from "./error.module.css"
import { error } from "@/utils/types"

function Error(props: error) {
    const {detail} = props

    return (
        <div className={styles.container}>
            <p className={styles.text}>{detail}</p>
        </div>
    )
}

export default Error