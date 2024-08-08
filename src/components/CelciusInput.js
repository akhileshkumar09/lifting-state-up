import React from 'react'

function CelciusInput({temperature, onTemperatureChange}) {
  return (
    <div>
        <fieldset>
            <legend>Enter temperature in celcius</legend>
            <input
            type='number'
            value={temperature}
            onChange={e=>onTemperatureChange(e.target.value)}
            />
            <p>{temperature*(9/5)+32}</p>
        </fieldset>
    </div>
  )
}

export default CelciusInput