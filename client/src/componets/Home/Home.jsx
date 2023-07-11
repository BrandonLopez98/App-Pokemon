import './Home.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPokemons,filterPokemonsType,filterPokemonsOrigin,orderPokemons,getTypes,setBar,setButtons} from '../../redux/action'
import Card from '../Card/Card'
import Paginado from '../Paginacion/Paginacion'
import SearchBar from '../searchBar/SearchBar'
import Loader from '../Loading/Loading'
import useLocalStorage from '../customHook/useLocalStorage'

const HomePage = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector((state) => state.pokemons)
  const types = useSelector((state) => state.types)
  const [typeFilter, setTypeFilter] = useLocalStorage('textFilter', '')
  const [origin, setOrigin] = useLocalStorage('origin', '')
  const [order, setOrder] = useLocalStorage('order', '')
  const bar = useSelector((state) => state.bar)
  const [, setOrden] = useState('')
  const buttons = useSelector((state) => state.buttons)
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage,] = useState(12)
  const indexOfLastPokemon = currentPage * pokemonsPerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
  const currentPokemons = pokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  )

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  useEffect(() => {
    dispatch(getPokemons())
    dispatch(getTypes())
    if (buttons[2]) {
      setOrder(buttons[2])
      setOrigin(buttons[0])
      setTypeFilter(buttons[1])
    }
  }, [buttons, dispatch, getPokemons])

  const handleFilterType = (event) => {
    setCurrentPage(1)
    dispatch(setButtons([]))
    setTypeFilter(event.target.value)
    dispatch(filterPokemonsType(event.target.value))
  }
  const handleOriginFilter = (event) => {
    setCurrentPage(1)
    dispatch(setButtons([]))
    setTypeFilter('all')
    setOrder('id')
    setOrigin(event.target.value)
    dispatch(filterPokemonsOrigin(event.target.value))
  }
  const handleOrder = (event) => {
    event.preventDefault()
    dispatch(setButtons([]))
    setOrder(event.target.value)
    dispatch(orderPokemons(event.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${event.target.value} `)
  }
  const handleBarra = () => {
    dispatch(setBar(false))
  }
  return (
    <div className='homeBody'>
      <div className='selectores'>
        <SearchBar handleBarra={handleBarra} setCurrentPage={setCurrentPage} />
      
      {bar ? (
        <div>
          <select
            value={buttons[0] && buttons[0] ? buttons[0] : origin}
            
            onChange={handleOriginFilter}
          >
            <option value='all'>Mostar Todos</option>
            <option value='database'>Creados por mi</option>
            <option value='api'>Creador por la serie</option>
          </select>
          <select
            value={buttons[2] && buttons[2] ? buttons[2] : order}
            
            onChange={handleOrder}
          >
            <option key='id' value='id'>
              Ordenar por id
            </option>
            <option key='ascendingName' value='ascendingName'>
              A-Z
            </option>
            <option key='descendingName' value='descendingName'>
              Z-A
            </option>
            <option key='ascendingAttack' value='ascendingAttack'>
            Ascendente por ataque
            </option>
            <option key='descendingAttack' value='descendingAttack'>
            Descendente por ataque
            </option>
          </select>
          <select
            value={buttons[1] && buttons[1] ? buttons[1] : typeFilter}
            
            onChange={handleFilterType}
          >
            <option value='all'>Todos los tipos</option>
            {types.map((item, index) => {
              return (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              )
            })}
          </select>
        </div>
      ) : null}
      <p>Mas Pokemons</p>
          <Paginado
              pokemonsPerPage={pokemonsPerPage}
              pokemons={pokemons.length}
              paginado={paginado}
            />
      </div>


      {!currentPokemons.length && <div className='loading'><Loader /></div>}

      <div className='cardContainer'>
        {Array.isArray(currentPokemons) && currentPokemons ? (
          currentPokemons.map((item) => {
            if (typeof item === 'string') {
              return (
                <div className='errorContainer'>
                  <h3 className='errorTitle'>
                    Error 404: Pokémon no encontrado con ese tipo, intente con otro
                  </h3>
                </div>
              )
            }
            return (
              <Card
                key={item.id}
                image={item.image}
                name={item.name}
                types={item.types}
                id={item.id}
              />
            )
          })
        ) : (
          <div className='errorContainer'>
            <h3 className='errorTitle'>Error 404: Pokémon no encontrado</h3>
            <h3 className='errorText'>
              Asegúrate de escribir el nombre exacto.
            </h3>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default HomePage
