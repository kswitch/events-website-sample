import styles from "./eventItem.module.css";
import Image from "next/image";
import eventDataType from "../../utils/types";
import Link from "next/link";
import { useContext } from "react";
import { EventContextConsumer } from "../../utils/context";

function EventItem(props: eventDataType): JSX.Element {
  const { id, imgUrl, name, link , location, date: {day, month, year} } = props
  const { getClickedEvent } = useContext(EventContextConsumer)

  return (
    <div className={styles.container} id={id}>
      <div>
        <Image
          priority 
          className={styles.image}
          src={imgUrl}
          alt={name}
          width={360}
          height={400}
        />
      </div>
      <div className={styles.eventDetails}>
        <div>
            <p className={styles.eventName}>{name}</p>
            <p className={styles.eventDate}>{month} {day}, {year}</p>
            <p className={styles.eventLocation}>{location}</p>
        </div>
        <div className={styles.btnDiv}>
          <Link 
            href={`events/${link}`} 
            className={styles.btn}
            onClick={() => getClickedEvent(id)}
          >
            Explore Event
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
