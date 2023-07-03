import styles from "./wrapper.module.css"
import NavigationBar from "../navbar/navbar"

function Wrapper(props: any): JSX.Element {
    return (
        <div className={styles.container}>
            <NavigationBar />
            {props.children}
        </div>
    )

}

export default Wrapper