import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com",
    responseType: 'json',
    withCredentials: true
})

export const allProducts = async () => {
    return await api.get('/products')
    .then(res => {
        console.log(res);
        // res?.data
    })
    .catch(err=>{
        console.log(err)
        // return err.response.data
    })
}