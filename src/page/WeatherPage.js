import React, { useContext, useState } from 'react';
import Header from '../component/Header';
import Fab from '../component/Fab';
import NewCityForm from '../container/NewCityForm';
import Modal from '../component/Modal';
import { CitiesContext } from '../context/CitiesContext';
import CityWeatherDisplay from '../container/CityWeatherDisplay';


const WeatherPage = () => {

    const [isModalVisible, toggleModal] = useState(false);

    const {getCities,removeCityFromDatabase} = useContext(CitiesContext);

    const toggleModalEvent = () =>  toggleModal((prevState) => !prevState);

    return (<div>
        {isModalVisible &&
            <Modal toggleModal={toggleModalEvent}>
                <NewCityForm toggleModal={toggleModalEvent}/>
            </Modal>
        }
        <Header />
        {getCities().map((city) => {
            return <CityWeatherDisplay city={city}
             key={city.id} citiesActions={{removeCityFromDatabase}}/>
        })}
        <Fab onClick={() => toggleModal((prevState) => !prevState)} />
    </div>);
}

export default WeatherPage;