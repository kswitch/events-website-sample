"use client"

import { useContext, useEffect } from "react";

import Wrapper from "@/components/wrapper/wrapper";
import EventList from "@/components/eventLists/EventList";
import SearchBar from "@/components/searchBar/searchBar";
import { EventContextConsumer } from "@/utils/context";

function EventPage(): JSX.Element {
  const {displayData, findEventState, getAllEvents} = useContext(EventContextConsumer)
  
  useEffect(() => getAllEvents() ,[])

  return (
    <Wrapper>
      {!findEventState && <SearchBar />}
      <EventList eventData={displayData} />
    </Wrapper>
  );
}

export default EventPage;
