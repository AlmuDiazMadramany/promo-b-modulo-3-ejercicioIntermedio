import Country from "./Country"


function ListCountries({countriesList}) {
    const countryItemHtml = countriesList.map(item =>{
    
    return <Country key={item.name.official} countryData={item}/>
    })

  return (
    <section>
        {countryItemHtml}
    </section>
  )
}

export default ListCountries