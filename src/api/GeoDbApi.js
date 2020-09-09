import axios from 'axios'

const baseUrl = process.env.REACT_APP_GEODB_BASE_URL;
const apiKey = process.env.REACT_APP_GEODB_API_KEY;

const getCitiesByName = (name) => {
    return axios.get(`${baseUrl}?namePrefix=${name}`,{ headers: 
        { 
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com', 
            'x-rapidapi-key': apiKey
        } 
    })
}


export {
    getCitiesByName
}