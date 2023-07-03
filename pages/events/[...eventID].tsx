"use client"

import { useContext} from "react"
import { EventContextConsumer } from "@/utils/context"

import Wrapper from "@/components/wrapper/wrapper"
import EventItem from "@/components/eventItem/EventItem"
// import eventDataType from "@/utils/types"

function SelectedEventPage(props: any): JSX.Element {
    // const {clickedEventData, getClickedEvent} = useContext(EventContextConsumer) 
    const {data} = props 

   if (!data) {
    return ( 
        <Wrapper>
            <p>Loading...</p>
        </Wrapper>
    )
   }
    
    return (
        <Wrapper>
            <EventItem {...data}/>
            <p>This is where the selected event will be loaded</p>
        </Wrapper>
    )
}

export async function getStaticProps(context: Object) {
    const {clickedEventData} = useContext(EventContextConsumer) 
    
    console.log(context);   
    
    if (!clickedEventData) {
        return { notFound: true }
    }
    
    return {
        props:{
            data: clickedEventData
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            // {params: {eventID: ""}},
            // {params: {eventID: ""}}
        ],
        fallback: true
    }

}

export default SelectedEventPage
