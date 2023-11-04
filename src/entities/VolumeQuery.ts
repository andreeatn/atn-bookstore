export default interface VolumeQuery{
    volumeSubject?:string,
    volumeId?:string,
    orderBy?:'relevance' | 'newest',
    resultNo?: number
}