export interface IdndListResponse {

    count: number
    results: IdndListItem[]
}


export interface IdndListItem {
    index: string
    name: string
    url: string
}