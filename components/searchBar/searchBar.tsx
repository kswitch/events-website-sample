import styles from "./searchBar.module.css"
import DropDownMenu from "./dropDownMenu"
import { useContext, useState } from "react"
import { EventContextConsumer } from "../../utils/context"

function SearchBar(): JSX.Element {
    const values = {
        month: "",
        year: ""
    }

    const {filterEvents, dateData:{monthData, yearData} } = useContext(EventContextConsumer)
    const [valuesData, setValuesData] = useState(values)
    
    function handleChange(event: any) {
        setValuesData((prevValue: any) => {
            if (event.target.id == "year") {
                return {...prevValue, year: event.target.value}
            }

            if (event.target.id == "month") {
                return {...prevValue, month: event.target.value}
            }
        })
    }

    function handleSubmit(e: any) {
        e.preventDefault()      
        filterEvents(valuesData.month, valuesData.year)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <DropDownMenu handleChange={handleChange} id="year" data={yearData} />
            <DropDownMenu handleChange={handleChange} id="month" data={monthData} />
            <button className={styles.btn}>Find Events</button>
        </form>
    )
}

export default SearchBar