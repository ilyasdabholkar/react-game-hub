import axios, { AxiosRequestConfig } from "axios";

/*
    This will create an axios instance with a prefixed base URL &
    each request made with this axios instance will have a query sting key with value defined here 
*/
const axiosInstance = axios.create({
    baseURL : 'https://api.rawg.io/api/',
    params : {
        key : 'c350842240524874a81483fd7309ee2f'
    }
})

class APIClient<T> {
    endpoint : string;

    constructor(endpoint:string){
        this.endpoint = endpoint;
    }

    getAll = (config? : AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint,config).then((res)=>res.data);
    }
}

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default APIClient;