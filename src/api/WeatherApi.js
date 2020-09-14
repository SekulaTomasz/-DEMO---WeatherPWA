import axios from 'axios'

const baseUrl = process.env.REACT_APP_WEATHER_BASE_URL;
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const getWeatherByCityName = (name) => {
    return axios.get(`${baseUrl}?q=${name}&appid=${apiKey}&cnt=8&units=metric`)
}

const getWeatherByCityId = (id) => {
    return axios.get(`${baseUrl}?id=${id}&appid=${apiKey}}&cnt=8&units=metric`)
}
const getWeatherByGeoCoords = (coordinates) => {
    return axios.get(`${baseUrl}?lat=${coordinates.latitude}&lon=${coordinates.longitude}&exclude=hourly,minutely&appid=${apiKey}&units=metric`)
}

export {
    getWeatherByCityName,
    getWeatherByCityId,
    getWeatherByGeoCoords
}
