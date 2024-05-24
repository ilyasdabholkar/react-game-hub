import axios from "axios";

/*
    This will create an axios instance with a prefixed base URL &
    each request made with this axios instance will have a query sting key with value defined here 
*/
export default axios.create({
    baseURL : 'https://api.rawg.io/api/',
    params : {
        key : 'c350842240524874a81483fd7309ee2f'
    }
})

