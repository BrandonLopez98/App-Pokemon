import './SearchBar.css'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { searchPokemon } from '../../redux/action'

const SearchBar = ({ setCurrentPage, handleBarra }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleInputChange = (event) => {
    event.preventDefault()
    setName(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(searchPokemon(name))
    setName('')
    setCurrentPage(1)
    if (event.target.value) {
      handleBarra()
    }
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      handleSubmit(event)
      if (event.target.value) {
        handleBarra()
      }
    }
  }

  return (
    <div className='buscador'>
      <input
        type='text'
        placeholder='Busca tu pokemon'
        onChange={(event) => handleInputChange(event)}
        onKeyDown={(event) => handleKeyDown(event)}
        value={name}
      />
      <button
        type='submit'
        onClick={(event) => handleSubmit(event)}
      >
      </button>
    </div>
  )
}

export default SearchBar
