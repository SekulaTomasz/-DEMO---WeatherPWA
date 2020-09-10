import React, { useState } from 'react';
import Header from '../component/Header';
import Card from '../component/Card';
import Fab from '../component/Fab';
import NewCityForm from '../container/NewCityForm';
import Modal from '../component/Modal';


const WeatherPage = () => {

    const [isModalVisible, toggleModal] = useState(false);


    return (<div>
        {isModalVisible &&
            <Modal toggleModal={toggleModal}>
            <NewCityForm />
        </Modal>
        }
        <Header />
        <Card>
            <span>TEST</span>
        </Card>
        <Fab onClick={() => toggleModal((prevState) => !prevState)} />
    </div>);
}

export default WeatherPage;