import React from 'react';
import Space from './spaceship';
import logo from './moon-1527501_1920.jpg'
// import Space from './spaceship';

const HomePage = () => {
  
  return (
    // <Spaceship></Spaceship>
    <div style={{
        
            backgroundImage:`url(${logo})`,
            backgroundSize:"cover",
            position:'relative',
            width:'100%',
            minHeight:"90vh"
    }}>
      
        <h1 className="heading" >
        Infinity 
    </h1>
    <h1 className="html-spinner" >
      
    </h1>
    <h1 className="html-spinner1" >
      </h1>
    <h1 className="heading1" >
        Space Market
        
    </h1>
    
      {/* Your component content here */}
     
    </div>
  );
};

export default HomePage;
