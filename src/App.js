import React, { useState, useRef } from 'react'
export default function App() {
  const [weatherData, setWeatherData] = useState({});
  const cityNameRef = useRef();

  function handleTownChange(e) {
    if (e.key === "Enter") fetch(`http://localhost:3000/${cityNameRef.current.value}`)
      .then(response => response.json())
      .then((json) => {
        if (json.cod !== 200) throw json;
        setWeatherData(json)
      })
      .catch(error => console.log("error", error));// TODO Handle errors(popup modal or setState)
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
