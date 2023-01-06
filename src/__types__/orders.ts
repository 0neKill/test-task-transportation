export interface Order {
    id: number,
    from: {
        lat: number,
        lng: number
    },
    to: {
        lat: number,
        lng: number
    }
}
