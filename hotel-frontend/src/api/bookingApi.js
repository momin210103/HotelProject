import axiosClient from "./axiosClient"

const bookigApi = {
    search:(params)=> axiosClient.get("/booking/search",{params}), //GET/booking/search?person=2
    
}
export default bookigApi;