import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getWeatherByCityName } from '../../api/WeatherApi';
import { language } from '../../shared/index';

import { ReactComponent as Sunny} from '../../assets/icons/01d.svg';

const StyledCardBodyContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledCardBodyLeftColumn = styled.div`
    flex: 3;
    flex-wrap: wrap;
`

const StyledCardBodyRightColumn = styled.div`
    flex: 2;
    flex-wrap: wrap;
`
const StyledParagraph = styled.p``;

const StyledWeatherAttributeName = styled.span`
    font-weight: 600;
`

const fetchCityWeather = async (cityName) => {
    return await getWeatherByCityName(cityName);
}

const convertEpochTimestampToDate = (timestamp) => new Date(new Date(0).setSeconds(timestamp))

const data = JSON.parse('{"coord":{"lon":19.92,"lat":50.08},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":294.91,"feels_like":296.29,"temp_min":293.15,"temp_max":297.04,"pressure":1026,"humidity":88},"visibility":10000,"wind":{"speed":3.1,"deg":190},"clouds":{"all":39},"dt":1599985767,"sys":{"type":1,"id":1701,"country":"PL","sunrise":1599970418,"sunset":1600016337},"timezone":7200,"id":3094802,"name":"Krakow","cod":200}');

const CardBody = ({ city }) => {

    const { name } = city;

    useEffect(() => {
        // fetchCityWeather(name).then((result) => {
        //     debugger;
        // });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <StyledCardBodyContainer>
            <StyledCardBodyLeftColumn>
            <Sunny />
            </StyledCardBodyLeftColumn>
            <StyledCardBodyRightColumn>
                <StyledParagraph>
                    <StyledWeatherAttributeName>{language.pl.weatherDescription.humidity}</StyledWeatherAttributeName>
                    {`${data.main.humidity}%`}
                </StyledParagraph>
                <StyledParagraph>
                    <StyledWeatherAttributeName>{language.pl.weatherDescription.pressure}</StyledWeatherAttributeName>
                    {data.main.pressure}
                </StyledParagraph>
                <StyledParagraph>
                    <StyledWeatherAttributeName>{language.pl.weatherDescription.wind}</StyledWeatherAttributeName>
                    {`${data.wind.speed}mph ${data.wind.deg}°`}
                </StyledParagraph>
                <StyledParagraph>
                    <StyledWeatherAttributeName>{language.pl.weatherDescription.sunrise}</StyledWeatherAttributeName>
                    {convertEpochTimestampToDate(data.sys.sunrise).toLocaleString()}
                </StyledParagraph>
                <StyledParagraph>
                    <StyledWeatherAttributeName>{language.pl.weatherDescription.sunset}</StyledWeatherAttributeName>
                    {convertEpochTimestampToDate(data.sys.sunset).toLocaleString()}
                </StyledParagraph>
            </StyledCardBodyRightColumn>
        </StyledCardBodyContainer>
    )
}

export default CardBody;