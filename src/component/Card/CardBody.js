import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getWeatherByCityName } from '../../api/WeatherApi';
import { language, typography } from '../../shared/index';

const StyledCardBodyContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledCardBodyLeftColumn = styled.div`
    flex: 3;
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
`

const StyledCardBodyRightColumn = styled.div`
    flex: 2;
    flex-wrap: wrap;
`

const StyledWeatherAttributeName = styled.span`
    font-weight: 600;
`

const StyledTemperatureText = styled.span`
    font-size: ${typography.H4}
`


const fetchCityWeather = async (cityName) => {
    return await getWeatherByCityName(cityName);
}

const convertEpochTimestampToDate = (timestamp) => new Date(new Date(0).setSeconds(timestamp)-(new Date().getTimezoneOffset()*60000))

const data = JSON.parse('{"coord":{"lon":19.92,"lat":50.08},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":294.91,"feels_like":296.29,"temp_min":293.15,"temp_max":297.04,"pressure":1026,"humidity":88},"visibility":10000,"wind":{"speed":3.1,"deg":190},"clouds":{"all":39},"dt":1599985767,"sys":{"type":1,"id":1701,"country":"PL","sunrise":1599970418,"sunset":1600016337},"timezone":7200,"id":3094802,"name":"Krakow","cod":200}');

const CardBody = ({ city }) => {

    const { name } = city;

    const [weather, setWeather] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchCityWeather(name).then(({data}) => {
            setWeather({
                icon: data.weather[0].icon,
                temp: data.main.temp,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                wind: {
                    speed: data.wind.speed,
                    deg: data.wind.deg
                },
                sys: {
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset
                }
            })
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        if(weather) setLoading(false);
    }, [weather])

    if(isLoading) return <></>

    return (
        <StyledCardBodyContainer>
            <StyledCardBodyLeftColumn>
                <div style={{
                    flex: "auto"
                }}><img src={require(`../../assets/icons/${weather.icon}.svg`)} style={{ width: '100%' }} /></div>
                <div style={{
                    flex: 1,
                    paddingRight: '1rem'
                }}><StyledTemperatureText>{`${weather.temp}°C`}</StyledTemperatureText></div>
                
                
            </StyledCardBodyLeftColumn>
            <StyledCardBodyRightColumn>
                <p>
                    <StyledWeatherAttributeName>{language.pl.weatherDescription.humidity}</StyledWeatherAttributeName>
                    {`${weather.humidity}%`}
                </p>
                <p>
                    <StyledWeatherAttributeName>{language.pl.weatherDescription.pressure}</StyledWeatherAttributeName>
                    {weather.pressure}
                </p>
                <p>
                    <StyledWeatherAttributeName>{language.pl.weatherDescription.wind}</StyledWeatherAttributeName>
                    {`${weather.wind.speed}km/h ${weather.wind.deg}°`}
                </p>
                <p>
                    <StyledWeatherAttributeName>{language.pl.weatherDescription.sunrise}</StyledWeatherAttributeName>
                    {convertEpochTimestampToDate(weather.sys.sunrise).toLocaleString()}
                </p>
                <p>
                    <StyledWeatherAttributeName>{language.pl.weatherDescription.sunset}</StyledWeatherAttributeName>
                    {convertEpochTimestampToDate(weather.sys.sunset).toLocaleString()}
                </p>
            </StyledCardBodyRightColumn>
        </StyledCardBodyContainer>
    )
}

export default CardBody;