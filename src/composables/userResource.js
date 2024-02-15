import { ref } from "vue"
import usePageRequest from "./usePageRequest";
export default function useResource(resource){
    const {makeRequest} = usePageRequest();
    const items = ref([])
    const baseURL = `https://jsonplaceholder.typicode.com/${resource}`;

    const fetchAll = async () => items.value = await makeRequest(baseURL)

    const item =ref(null)

    const fetchOne = async (id) => item.value = await makeRequest(`${baseURL}/${id}`)

        


    return {
        items,
        fetchAll,
        item,
        fetchOne
    }
}
