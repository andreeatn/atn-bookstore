import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import Subjects from "data/Subjects";
import { FetchResponse } from "entities/FetchResponse";
import Volume from "entities/Volume";
import VolumeQuery from "entities/VolumeQuery";
import apiClient from "services/apiClient";

const useVolumes = (volumeQuery: VolumeQuery) => {

    return useQuery<FetchResponse<Volume>,Error>({
        queryKey:['volumes', volumeQuery],
        queryFn: () => 
            apiClient.get(`/volumes/`,{params:{
                q: `subject:${volumeQuery.volumeSubject} `,
                orderBy: volumeQuery.orderBy,
                startIndex: (volumeQuery.startIndex - 1) * volumeQuery.resultNo,
                maxResults: volumeQuery.resultNo
            }})
            .then(res => {
                return res.data})
            .catch(err => err),
    })
}

export default useVolumes;

