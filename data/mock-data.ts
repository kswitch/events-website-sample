import { nanoid } from "nanoid"
import eventDataType from "../utils/types";

export const eventData: eventDataType[] = [
  {
    id: nanoid(),
    imgUrl: "https://loremflickr.com/640/360",
    name: "Programming for everyone",
    link: "programming-for-everyone",
    date: {
      day: "12",
      month: "May",
      year: "2023"
    },
    location: "Port Harcourt, Rivers State, Nigeria",
    isFeatured: true
  },
  {
    id: nanoid(),
    imgUrl: "https://loremflickr.com/640/360",
    name: "Networking for introverts",
    link: "networking-for-introverts",
    date: {
      day: "13",
      month: "June",
      year: "2023"
    },
    location: "Lekki, Lagos State, Nigeria",
    isFeatured: false
  },
  {
    id: nanoid(),
    imgUrl: "https://loremflickr.com/640/360",
    name: "Networking for extroverts",
    link: "networking-for-extroverts",
    date: {
      day: "14",
      month: "July",
      year: "2023"
    },
    location: "Enugu, Enugu State, Nigeria",
    isFeatured: false
  },
  {
    id: nanoid(),
    imgUrl: "https://loremflickr.com/640/360",
    name: "ChatGPT for beginners",
    link: "chatgpt-for-beginners",
    date: {
      day: "15",
      month: "August",
      year: "2023"
    },
    location: "Gwarinpa, Abuja F.C.T, Nigeria",
    isFeatured: true
  },
];

export const monthData: string[] = 
[
"January", 
"February", 
"March", 
"April", 
"May", 
"June", 
"July", 
"August", 
"September", 
"October", 
"November", 
"December"
]

export const yearData: string[] = 
[
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016"
]