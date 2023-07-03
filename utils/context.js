"use client";

import { createContext, useState} from "react";
import { eventData, monthData, yearData } from "../data/mock-data";

const EventContext = createContext();

function EventContextProvider({children}) {
  const [data, setData] = useState(eventData)
  const [dateData, setDatedata] = useState({monthData, yearData})
  const [displayData, setDisplayData] = useState([])
  const [clickedEventData, setClickedEventData] = useState(null)
  const [findEventState, setFindEventState] = useState(false)

  function getFeaturedEvents() {
    setDisplayData(data.filter(event => event.isFeatured))
    setFindEventState(false)
    setClickedEventData(null)
  }

  function getAllEvents() {
    setDisplayData(data)
    setFindEventState(false)
    setClickedEventData(null)
  }

  function getClickedEvent(eventID) {
    const event = displayData.find(item => item.id === eventID)
    setFindEventState(true)
    setClickedEventData(event)
  }

  function filterEvents(month, year) {
    if (!month && !year) {
      alert("Please select a month and/or year")
      return
    }

    if(!month && year) {
      setDisplayData(prevDisplayData => prevDisplayData.filter(data => {
        return data.date.year === year
      }))
    }
    else if(month && !year) {
      setDisplayData(prevDisplayData => prevDisplayData.filter(data => {
        return data.date.month === month
      }))
    }
    else {
      setDisplayData(prevDisplayData => prevDisplayData.filter(data => {
        return (data.date.month === month && data.date.year === year)
      }))
    }
    setFindEventState(true)
  }

  const context = {
    displayData: displayData,
    clickedEventData: clickedEventData,
    dateData: dateData,
    findEventState: findEventState,
    getFeaturedEvents: () => getFeaturedEvents(),
    getAllEvents: () => getAllEvents(),
    filterEvents: (month, year) => filterEvents(month, year),
    getClickedEvent: (eventID) => getClickedEvent(eventID),
  }

  return (
    <EventContext.Provider value={context}>
        {children}
    </EventContext.Provider>
  );
};
export { EventContextProvider, EventContext as EventContextConsumer };
