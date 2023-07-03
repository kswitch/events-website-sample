import EventItem from "../eventItem/EventItem";
import Error from "../error/error";
import Link from "next/link";
import styles from "./eventList.module.css";
import eventDataType from "../../utils/types";
import { useContext } from "react";
import { EventContextConsumer } from "@/utils/context";

function EventList(props: any): JSX.Element {
  const {getAllEvents} = useContext(EventContextConsumer)
  const {eventData} = props

  if(eventData.length === 0) {
    const text = "There are no events available. "
    return (
      <div className={styles.container}>
        <Error detail={text} />
        <div className={styles.btnDiv}>
          <Link onClick={getAllEvents} href="/events" className={styles.btn}>Explore All Events</Link>
        </div>
      </div>
    )
  }
 
  return (
    <div className={styles.container}>
      {eventData.map((event: eventDataType) => <EventItem key={event.id} {...event} />)}
    </div>
  );
}

export default EventList;
