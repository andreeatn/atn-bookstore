import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "entities/FetchResponse";
import Volume from "entities/Volume";
import VolumeQuery from "entities/VolumeQuery";
import apiClient from "services/apiClient";

export function useVolumesBySubject(volumeQuery: VolumeQuery){
    return useQuery<FetchResponse<Volume>,Error>({
        queryKey:['volumes', volumeQuery],
        queryFn: () => 
            apiClient.get(`/volumes/`,{params:{
                q: `subject:${volumeQuery.volumeSubject}`,
                orderBy: volumeQuery.orderBy ,
                maxResults: volumeQuery.resultNo
            }})
            .then(res => res.data)
            .catch(err => err)
    })
}

export function useVolumesById(volumeQuery: VolumeQuery){
    return useQuery<FetchResponse<Volume>,Error>({
        queryKey:['volumes', volumeQuery],
        queryFn: () => 
            apiClient.get(`/volumes/${volumeQuery.volumeId}`,{params:{
                orderBy: volumeQuery.orderBy ,
                maxResults: volumeQuery.resultNo
            }})
            .then(res => res.data)
            .catch(err => err)
    })
}
