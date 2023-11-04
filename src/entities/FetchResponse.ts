
export interface FetchResponse<T>{
    kind: string,
    totalItems: number,
    items:T[]
}