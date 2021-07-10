import React, { useState, useRef } from 'react'
export default function App() {
  const [weatherData, setWeatherData] = useState({});
  const cityNameRef = useRef();
  /**
   * Fetch data from middle api server and sets weather data
   * If error uccures create notification to client
   */
  async function handleTownChange(e) {
    if (e.key === "Enter") {
      try {
        const response = await (await fetch(`http://localhost:3000/${cityNameRef.current.value}`)).json();

        if (response.cod !== 200) throw response;
        setWeatherData(response);
      } catch (error) {
        // TODO Handle errors(popup modal or setState)
      }
    }
  }
  return (
    <>
      <div>
        <input ref={cityNameRef} onKeyDown={handleTownChange} />
        <p></p>
      </div>
    </>
  )
}
