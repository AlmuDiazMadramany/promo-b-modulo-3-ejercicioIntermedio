import "../styles/App.css"
import Header from "./Header"
import dataJson from "../services/data.json"
import ListCountries from "./ListCountries"
import Filters from "./Filters"
import { useState } from "react"


function App() {
  const [searchValue, setSearchValue] = useState ("")

  const changeSearch = (value) =>{
    setSearchValue(value.toLowerCase())
  }

  const filterCountries = dataJson.filter(countryData => countryData.name.common.toLowerCase().includes(searchValue))

  return (
    <>
    <Header/>

    <main>
      <Filters onChangeFilter ={changeSearch}/>
      <ListCountries countriesList ={filterCountries}/>
    </main>
    
    </>
  
  )
}

export default App
