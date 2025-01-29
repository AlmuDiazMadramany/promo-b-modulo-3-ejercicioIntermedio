import "../styles/App.css"
import Header from "./Header"
import  dataJson from "../services/data.json"
import ListCountries from "./ListCountries"


function App() {

  return (
    <>
    <Header/>

    <main>
      <ListCountries countriesList ={dataJson}/>

    </main>
    
    
    </>
  
  )
}

export default App
