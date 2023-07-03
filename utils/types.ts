export default interface eventDataType extends Object {
    id: string
    imgUrl: string
    name: string
    link: string
    date: dateObject
    location: string
    isFeatured: boolean
}
export interface dateObject extends Object {
    day: string,
    month: string,
    year: string
}

export interface dataObject extends Object {
    data: string[]
    id: string
    handleChange: Function
}

export interface error extends Object {
    detail: string
}