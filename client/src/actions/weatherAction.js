import Axios from "../config/axios"

export const getAllwhetherDetails = async(city)=>{
    try {
        const response = await Axios.get(`api/weather/${city}`)
        return response
    } catch (error) {
        console.log(error)
    }
}