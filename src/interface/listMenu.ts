

export interface ListMenuResponse {
    number: number
    offset: number
    results: ListMenuItem[]
    totalResults: number

}

export interface ListMenuItem {
    id: number
    image: string
    title: string
    type: string
}

