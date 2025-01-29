

function Filters({onChangeFilter}) {

    const handleChange=(ev) =>{
        onChangeFilter(ev.target.value);
    }

  return (
    <div>
        <h2>Filtros</h2>
        <form>
            <div>
                <input type="text" placeholder="Escribe el país" onChange={handleChange} />
            </div>
        </form>
    </div>
  )
}

export default Filters