import React from 'react';
import AlertClock from './components/AlertClock';

const App = () => {
  const showAlertWithTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time is: ${currentTime}`);
  };

  return (
    <div>
      <h1>My App</h1>
      <AlertClock handleClick={showAlertWithTime} />
    </div>
  );
};

export default App;