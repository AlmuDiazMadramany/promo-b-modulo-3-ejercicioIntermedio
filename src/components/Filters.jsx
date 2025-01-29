

function Filters({onChangeFilter}) {

    const handleChange=(ev) =>{
        onChangeFilter(ev.target.value);
    }
    const handleContinentChange=()=>{
        
    }


  return (
    <div>
        <h2>Filtros</h2>
        <form>
            <div>
                <input type="text" placeholder="Escribe el país" onChange={handleChange} />
            </div>

            <div>
                <select onChange={handleContinentChange} >
                <option value="">Selecciona el continente</option>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>


                </select>


            </div>
        </form>
    </div>
  )
}

export default Filters