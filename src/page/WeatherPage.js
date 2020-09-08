import React from 'react';
import Header from '../component/Header';
import Card from '../component/Card';
import Fab from '../component/Fab';
import useModal from '../hooks/useModal';

const WeatherPage = () => {

    const { toggleModal } = useModal();

    return (<div>
        <Header />
        <Card>
            <span>TEST</span>    
        </Card>
        <Fab onClick={() => toggleModal((prevState) => !prevState )}/>
    </div>);
}

export default WeatherPage;