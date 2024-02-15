import { computed, reactive } from "vue";
const activeRequests = reactive([])
export default function usePageRequest() {


    const isLoading = computed(() => !!activeRequests.length)
    const makeRequest = async (url) => {

        //push the url to the activeRequest
        const index = activeRequests.length
        activeRequests[index] = url;
        const response = await fetch(url)
        .catch(error => alert(error))
        const data = await response.json()
        //remove the url from activeRequests
        activeRequests.splice(index, 1)
        return data
    }
    return {isLoading, makeRequest}
}