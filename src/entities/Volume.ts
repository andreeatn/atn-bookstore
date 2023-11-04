export default interface Volume{
    id: string,
    volumeInfo:{
        authors:string[],
        categories: string[],
        description: string,
        imageLinks: {thumbnail: string},
        pageCount: number,
        publisherDate: string,
        publisher: string,
        subtitle: string,
        title: string
    },
    saleInfo:{
        isEbook: boolean,
        listPrice:{
            amount: number
            currencyCode: "RON"
        }
    }
}
