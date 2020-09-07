import React from 'react';
import './App.css';
import { LoaderProvider } from './context/LoaderContext';
import WeatherPage from './page/WeatherPage';

function App() {
  return (
    <div className="App">
      <LoaderProvider>
        <WeatherPage />
      </LoaderProvider>
    </div>
  );
}

export default App;
