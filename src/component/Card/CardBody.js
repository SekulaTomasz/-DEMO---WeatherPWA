import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getWeatherByGeoCoords } from '../../api/WeatherApi';
import { DateHelper } from '../../utils/index';
import { language, typography } from '../../shared/index';

const StyledCardBodyRow = styled.div`
    display: flex;
    flex-direction: column;
`

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

const StyledDailyWeatherElement = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`
const StyledDailyWeatherContainer = styled.div`
    display: flex;
    justify-content: row;
`


const fetchCityWeather = async (coordinates) => {
    return await getWeatherByGeoCoords(coordinates);
}

const convertEpochTimestampToDate = (timestamp) => new Date(new Date(0).setSeconds(timestamp))

const getDayNameFromDate = (date) => DateHelper.getDayNameFromDate(date);

const CardBody = ({ city }) => {

    const { geometry } = city;

    const [weather, setWeather] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchCityWeather(geometry).then(({ data }) => {
            setWeather({
                icon: data.current.weather[0].icon,
                temp: data.current.temp,
                humidity: data.current.humidity,
                pressure: data.current.pressure,
                wind: {
                    speed: data.current.wind_speed,
                    deg: data.current.wind_deg
                },
                sys: {
                    sunrise: data.current.sunrise,
                    sunset: data.current.sunset
                },
                daily: data.daily.map((x) => {
                    return {
                        icon: x.weather[0].icon,
                        temp: {
                            day: Math.round(x.temp.day),
                            night: Math.round(x.temp.night)
                        },
                        dt: x.dt
                    }
                })
            })
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {
        if (weather) setLoading(false);
    }, [weather])

    if (isLoading) return <></>

    return (
        <StyledCardBodyRow>
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
            <StyledDailyWeatherContainer>
                {weather.daily.map((x, index) => 
                <StyledDailyWeatherElement key={index}>
                    <span>{`${getDayNameFromDate(convertEpochTimestampToDate(x.dt))}`}</span>
                    <img src={require(`../../assets/icons/${x.icon}.svg`)} style={{ width: '100%' }} />
                <span>{`${x.temp.day}°  ${x.temp.night}°`}</span>
                </StyledDailyWeatherElement>)}
            </StyledDailyWeatherContainer>
        </StyledCardBodyRow>
    )
}

export default CardBody;