
import { useState } from 'react';
import './App.css';
import CelciusInput from './components/CelciusInput';
import FohrenheitInput from './components/FohrenheitInput';
import HandleMultipleInputForm from './components/hard.js/HandleMultipleInputForm';
import MultiStepForm from './components/advance/MultiStepForm';

function App() {
  const [temperature, setTemperature] = useState(0)
  const handleCelciusChange = temp => setTemperature(temp)
  const handleFohrenheitChange = temp => setTemperature(temp)
  return (
    <div className="App">
     <CelciusInput 
      temperature={temperature}
      onTemperatureChange={handleCelciusChange}
      />
      <br/>
      
      <br/>
      <FohrenheitInput
      temperature={temperature}
      onTemperatureChange={handleFohrenheitChange}
      />
      <br/><br/>
      <HandleMultipleInputForm/>
      <br/><br/>
      <MultiStepForm/>
    </div>
  );
}

export default App;
