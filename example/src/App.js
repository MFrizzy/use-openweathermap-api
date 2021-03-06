import React from "react";

import { useOpenWeatherMapAPI } from "@jakubzet/use-openweathermap-api";

const Example = () => {
  const [state, fetchWeather] = useOpenWeatherMapAPI({
    key: "REPLACE_ME_WITH_API_KEY",
    queryConfig: {
      cityName: "Warszawa",
      countryCode: "pl"
    },
    queryType: "name",
    units: "metric"
  });

  return (
    <main>
      <h1>Demo of useOpenWeatherMapAPI hook</h1>

      <section>
        <h4>Loading state:</h4>
        <p>{state.pending ? "true" : "false"}</p>
      </section>

      <section>
        <h4>Error:</h4>
        <p>
          {state.error
            ? `Error: ${state.error.cod} - ${state.error.message}`
            : "Nope"}
        </p>
      </section>

      <section>
        <h4>Data:</h4>
        {state.data && state.data.name && state.data.main ? (
          <>
            <p>Weather in {state.data.name}:</p>
            <ul>
              <li>Currently: {state.data.main.temp} degrees</li>
              <li>Max: {state.data.main.temp_max} degrees</li>
              <li>Min: {state.data.main.temp_min} degrees</li>
            </ul>
          </>
        ) : (
          <p>Nope</p>
        )}
      </section>

      <button onClick={fetchWeather}>
        Fetch data (please remember to add your API key to config beforehand)
      </button>
    </main>
  );
};

export default Example;
