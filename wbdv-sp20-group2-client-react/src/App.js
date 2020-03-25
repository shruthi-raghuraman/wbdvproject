import React from 'react';
import LandingPageContainer from "./containers/LandingPageContainer";
import './App.css';

const App = () => (

      <div className='container mt-4'>
          <h4 className='display-4 text-center mb-4'>
              <i className='fas fa-cookie-bite'></i> Recipes Finder
          </h4>
        <LandingPageContainer/>
      </div>

  );


export default App;