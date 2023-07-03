"use client"

import Head from 'next/head'

import Wrapper from '@/components/wrapper/wrapper';
import EventList from '@/components/eventLists/EventList';
import SearchBar from '@/components/searchBar/searchBar';
import { useContext, useEffect } from "react";
import { EventContextConsumer } from '@/utils/context';

function Home() {
  const {displayData, findEventState, getFeaturedEvents} = useContext(EventContextConsumer)

  useEffect(() => getFeaturedEvents(), [])

  return (
    <>
      <Head>
        <title>Event Website Sample</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        {!findEventState && <SearchBar />}
        <EventList eventData={displayData} />
      </Wrapper>
    </>
  )
}

export default Home