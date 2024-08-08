import React from 'react'

function FohrenheitInput({temperature, onTemperatureChange}) {
  return (
    <div>
        <fieldset>
            <legend>Enter temperature in Fohrenheit</legend>
            <input
            type='number'
            value={temperature}
            onChange={e=>onTemperatureChange(e.target.value)}
            />
            <p>{(temperature-32)*5/9}</p>
        </fieldset>
    </div>
  )
}

export default FohrenheitInput