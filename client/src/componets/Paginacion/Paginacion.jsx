import './Paginacion.css'
const Paginacion = ({ pokemonsPerPage, pokemons, paginado }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(pokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='paginado'>
        {pageNumbers ?
          pageNumbers.map((number) => {
            return (
              <li className='number' key={number}>
                <button onClick={() => paginado(number)}>{number}</button>
              </li>
            )
          }):null}
      </ul>
    </nav>
  )
}

export default Paginacion
