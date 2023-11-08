import { useQuery } from "@tanstack/react-query"
import Volume from "entities/Volume"
import apiClient from "services/apiClient"

const useVolumeDetails = (volumeId: string | undefined) => {
    return useQuery<Volume,Error>({
        queryKey:['volume', volumeId],
        queryFn: () => 
            apiClient.get(`/volumes/${volumeId}`)
            .then(res => res.data)
            .catch(err => err)
    })
}

export default useVolumeDetails;