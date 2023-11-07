import { useQuery } from "@tanstack/react-query"
import { FetchResponse } from "entities/FetchResponse"
import Volume from "entities/Volume"
import VolumeQuery from "entities/VolumeQuery"
import apiClient from "services/apiClient"

const useVolumeDetails = (volumeId: VolumeQuery) => {
    return useQuery<FetchResponse<Volume>,Error>({
        queryKey:['volume', volumeId],
        queryFn: () => 
            apiClient.get(`/volumes/${volumeId}`,{params:{
            }})
            .then(res => res.data)
            .catch(err => err)
    })
}

export default useVolumeDetails;