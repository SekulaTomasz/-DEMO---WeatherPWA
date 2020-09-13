import React from 'react';
import Card from '../component/Card/Card';
import CardHeader from '../component/Card/CardHeader'
import CardBody from '../component/Card/CardBody';

const CityWeatherDisplay = ({city, citiesActions}) => {


    const {removeCityFromDatabase} = citiesActions;

    const {name, country} = city;

    return(
        <Card>
            <CardHeader title={name} subtitle={country} actions={{removeCityFromDatabase}}/>
            <CardBody city={city}/>
        </Card>
    )
}

export default CityWeatherDisplay;