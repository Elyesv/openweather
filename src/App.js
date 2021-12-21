import axios from 'axios';
import React, {useCallback, useEffect, useState} from "react";

function App() {

  const [data, setData] = useState({})
  const [city, setCity] = useState("")
  //const [ex, setEx] = useState({})
  const [url, setUrl] = useState("")

  const fetchCity = useCallback(() =>{
    url !== "" &&
    axios(url)
        .then(function(response){
          setData(response.data)
        })
  }, [url])

  useEffect(() =>{
    setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a32a825225d19883c0b3eb8e44dd36a1`)
  }, [city])


  //function handleChange({target}) {
  //  const {value, name} = target
        //  setEx({
  //    [name]: value
        //  })
  //}

  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault()
        fetchCity()}}>
        <label>Nom :</label>
        <input type="text" name="city" onChange={({target}) =>{
          setCity(target.value)
        }}/>
        <input type="submit"/>
      </form>
      {data.name && <>
        <p>{data.name}</p>
        <p>Lat : {data.coord.lat} | Lon : {data.coord.lon}</p>
        <p>{data.main.temp - 273.15}</p>
      </>
      }

    </div>
  );
}

export default App;
