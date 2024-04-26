import axios from "axios"
import { defaults } from "./default"

const callApiAndReturnDataGet = async (DATA, URL) => {
    const response = await axios({
        method: "GET",
        url: defaults.baseBackendUrl + URL,
        params: DATA,
        headers: {
            Authorization: `Token ${typeof window !== 'undefined' && localStorage.getItem("token")}`
        }
    })
    console.log(response)
    if (response.status === 200)
        return response.data
    else {
        return { error: "Unable To Fetch" }
    }
}

const callApiAndReturnDataPost = async (DATA, URL) => {
    const response = await axios({
        method: "POST",
        url: defaults.baseBackendUrl + URL,
        data: DATA,
        headers: {
            Authorization: `Token ${typeof window !== 'undefined' && localStorage.getItem("token")}`
        }
    })
    if (response.status === 200)
        return response.data
    else {
        return { error: response }
    }
}
const callApiAndReturnDataPostLogin = async (DATA, URL) => {
    const response = await axios({
        method: "POST",
        url: defaults.baseBackendUrl + URL,
        data: DATA,
    })
    if (response.status === 200)
        return response.data
    else {
        return { error: "Error" }
    }
}

export const loginProfile = (obj) => callApiAndReturnDataPostLogin(obj, "/login/login/")
export const getMovies = (obj) => callApiAndReturnDataPost(obj, "/recommend/suggestions/")
export const getDropdowns = (obj) => callApiAndReturnDataGet(obj, "/recommend/list/")

