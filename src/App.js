import React from 'react';
import { LoaderProvider } from './context/LoaderContext';
import WeatherPage from './page/WeatherPage';
import styled from 'styled-components';

const StyledAppContainer = styled.div`
  min-height: 100vh;
  background-color: #f0efeb;
`



function App() {
  return (
    <StyledAppContainer>
      <LoaderProvider>
        <WeatherPage />
      </LoaderProvider>
    </StyledAppContainer>
  );
}

export default App;
