import styles from "./searchBar.module.css"
import { dataObject } from "../../utils/types"

function DropDownMenu(props: dataObject): JSX.Element {
    const result = props.data.map((item: string) => {
        return <option key={item} value={item}>{item}</option>
    })

    return (
        <label htmlFor={props.id}>{`${props.id.toUpperCase()}: `}
            <select onChange={props.handleChange} id={props.id} className={styles.dropDownMenu}>
                <option key={props.id} disabled selected>{`Select a ${props.id}`}</option>
                {result}
            </select>
        </label>
    )
}

export default DropDownMenu