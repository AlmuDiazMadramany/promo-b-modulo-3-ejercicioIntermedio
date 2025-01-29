import "../styles/country.css"

function Country({countryData}) {
  return (
    <div className="countryCard">
        <p className="countryFlag">{countryData.flag}</p>
        <h2 className="countryName">{countryData.name.common}</h2>
        <h2 className="countryCapital">{countryData.capital}</h2>
        <h2 className="countryContinent">{countryData.continents}</h2>
    </div>
  )
}

export default Country