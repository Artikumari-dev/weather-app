// import { useState, useEffect } from 'react';

// const Weather = () => {
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [city, setCity] = useState('');

//   const API_KEY = '"7998b962f9e3778224bfa179508f46b5"'; 
//   const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
  

  
//   const weatherIcons = {
//     'clear sky': '☀️',
//     'few clouds': '⛅',
//     'scattered clouds': '☁️',
//     'broken clouds': '☁️',
//     'shower rain': '🌦️',
//     'rain': '🌧️',
//     'thunderstorm': '⛈️',
//     'snow': '🌨️',
//     'mist': '🌫️',
//     'default': '☀️'
//   };

  
//   const generateDemoData = (cityName) => {
//     const temperatures = [-5, 0, 5, 12, 18, 25, 30, 35];
//     const conditions = [
//       { main: 'Clear', description: 'clear sky' },
//       { main: 'Clouds', description: 'few clouds' },
//       { main: 'Rain', description: 'light rain' },
//       { main: 'Clouds', description: 'broken clouds' }
//     ];
    
//     const temp = temperatures[Math.floor(Math.random() * temperatures.length)];
//     const condition = conditions[Math.floor(Math.random() * conditions.length)];
    
//     return {
//       name: cityName,
//       sys: { country: 'US' },
//       main: {
//         temp: temp,
//         feels_like: temp + (Math.random() * 4 - 2),
//         humidity: Math.floor(Math.random() * 40) + 40,
//         pressure: Math.floor(Math.random() * 50) + 1000,
//         temp_min: temp - 3,
//         temp_max: temp + 5
//       },
//       weather: [{
//         main: condition.main,
//         description: condition.description,
//         id: Math.floor(Math.random() * 800) + 200
//       }],
//       wind: {
//         speed: (Math.random() * 10 + 2).toFixed(1),
//         deg: Math.floor(Math.random() * 360)
//       },
//       visibility: Math.floor(Math.random() * 5000) + 5000,
//       clouds: { all: Math.floor(Math.random() * 100) }
//     };
//   };

 
//   const fetchWeatherData = async (cityName) => {
//     try {
      
//       await new Promise(resolve => setTimeout(resolve, 1000)); 
//       return generateDemoData(cityName);
//     } catch (error) {
//       console.error('Fetch weather error:', error);
//       throw new Error('Failed to fetch weather data');
//     }
//   };


//   const searchWeather = async () => {
//     if (!city.trim()) {
//       setError('Please enter a city name');
//       return;
//     }

//     setLoading(true);
//     setError('');
    
//     try {
//       const data = await fetchWeatherData(city);
//       setWeather(data);
//       setCity(''); 
//     } catch (error) {
//       setError(error.message);
//       setWeather(null);
//     } finally {
//       setLoading(false);
//     }
//   };

  
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       searchWeather();
//     }
//   };

 
//   const getWeatherIcon = (description) => {
//     return weatherIcons[description?.toLowerCase()] || weatherIcons.default;
//   };

 

//   useEffect(() => {
//     const loadInitialData = async () => {
//       try {
//         const initialData = generateDemoData('New York');
//         setWeather(initialData);
//       } catch (error) {
//         console.error('Failed to load initial data:', error);
//         setError('Failed to load initial weather data');
//       }
//     };

//     loadInitialData();
//   }, []);

//   return (
//     <div className="min-h-screen p-4 bg-gray-500   ">
//       <div className="max-w-md mx-auto">
      
//         <header className="text-center mb-8 pt-8">
//           <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
//             🌤️ Weather App
//           </h1>
//           <p className="text-blue-100 text-lg">
//             Get real-time weather information
//           </p>
//         </header>

     
//         <section className=" backdrop-blur-md bg-sky-500 rounded-2xl p-6 mb-6 shadow-xl border border-white/10">
//           <div className="flex gap-3">
//             <div className="relative flex-1">
//               <input
//                 type="text"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Enter city name (e.g., London, Tokyo)..."
//                 className="w-full px-4 py-3 pl-10 rounded-xl border-0 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg transition-all duration-200"
//                 disabled={loading}
//               />
//               <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">📍</span>
//             </div>
//             <button
//               onClick={searchWeather}
//               disabled={loading || !city.trim()}
//               className="px-6 py-3 bg-white/90 hover:bg-white text-gray-800 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
//             >
//               {loading ? (
//                 <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
//               ) : (
//                 <span className="text-lg">🔍</span>
//               )}
//             </button>
//           </div>
//         </section>

      
//         {error && (
//           <div className="bg-red-500/90 backdrop-blur-md text-white p-4 rounded-xl mb-6 shadow-lg border border-red-400/30 animate-pulse">
//             <div className="flex items-center">
//               <span className="text-lg mr-3">⚠️</span>
//               {error}
//             </div>
//           </div>
//         )}

       
//         {loading && (
//           <div className="bg-white/20 backdrop-blur-md rounded-2xl p-12 text-center shadow-xl border border-white/10">
//             <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//             <p className="text-white text-lg font-medium">
//               Fetching weather data...
//             </p>
//             <p className="text-blue-100 text-sm mt-2">
//               Please wait a moment
//             </p>
//           </div>
//         )}

       
//         {weather && !loading && (
//           <main className={` rounded-2xl p-6 shadow-2xl text-white border border-white/10 bg-sky-500`}>
         
//             <div className="text-center mb-6">
//               <div className="flex items-center justify-center mb-2">
//                 <span className="text-lg mr-2">📍</span>
//                 <h2 className="text-2xl font-bold">
//                   {weather.name}
//                   {weather.sys?.country && (
//                     <span className="text-lg font-normal opacity-80">
//                       , {weather.sys.country}
//                     </span>
//                   )}
//                 </h2>
//               </div>
//               <p className="text-sm opacity-80">
//                 {new Date().toLocaleDateString('en-US', {
//                   weekday: 'long',
//                   year: 'numeric',
//                   month: 'long',
//                   day: 'numeric'
//                 })}
//               </p>
//             </div>

          
//             <div className="text-center mb-8">
//               <div className="flex items-center justify-center mb-4">
//                 <span className="text-8xl mr-6 drop-shadow-lg">
//                   {getWeatherIcon(weather.weather[0]?.description)}
//                 </span>
//                 <div className="text-left">
//                   <div className="text-6xl font-bold mb-2 drop-shadow-lg">
//                     {Math.round(weather.main.temp)}°
//                   </div>
//                   <div className="text-lg opacity-90 capitalize font-medium">
//                     {weather.weather[0]?.description}
//                   </div>
//                 </div>
//               </div>
              
//               {/* High/Low Temperature */}
//               <div className="flex justify-center space-x-4 text-sm opacity-80">
//                 <span>H: {Math.round(weather.main.temp_max)}°</span>
//                 <span>L: {Math.round(weather.main.temp_min)}°</span>
//               </div>
//             </div>

            
//           </main>
//         )}

        
//       </div>
//     </div>
//   );
// };

// export default Weather;

import React, { useEffect, useState } from "react";
import { Snowflake } from "lucide-react";


function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

 
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    const fetchApi = async () => {
      if (!debouncedSearch) return;

      const API_KEY = "7998b962f9e3778224bfa179508f46b5";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${debouncedSearch}&units=metric&appid=${API_KEY}`;

      try {
        const response = await fetch(url);
        const resJson = await response.json();

        if (resJson.cod === 200) {
          setCity(resJson.main);
        } else {
          setCity(null);
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
        setCity(null);
      }
    };

    fetchApi();
  }, [debouncedSearch]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 p-6">
      <div className="w-full max-w-md mb-8">
        <input
          type="search"
          placeholder="Enter city name..."
          className="w-full px-5 py-3 rounded-full bg-white/90 shadow-lg border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {!city ? (
        <p className="text-white text-lg">No Data Found</p>
      ) : (
        <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center border border-white/30 max-w-sm w-full">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Snowflake className="w-8 h-8 text-white drop-shadow-md animate-spin-slow" />
            <h2 className="text-2xl font-bold text-white drop-shadow">
              {debouncedSearch}
            </h2>
          </div>

          <h1 className="text-6xl font-extrabold text-white drop-shadow mb-2">
            {city.temp}°C
          </h1>

          <h3 className="text-lg text-white/90">
            Min: {city.temp_min}°C | Max: {city.temp_max}°C
          </h3>
        </div>
      )}
    </div>
  );
};

export default Weather;
