import './Card.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deletePokemon } from '../../redux/action'

const Card = ({ name, image, types, id }) => {
  const dispatch = useDispatch()

  const handleClick = (id) => {
    dispatch(deletePokemon(id))
  }

  return (
    <div className='card'>
      {isNaN(id) && (
        <button className='deleteButton' onClick={() => handleClick(id)}>
          x
        </button>
      )}
      <Link className='decoration' to={`/detail/${id}`}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <div className='horizontal'>
          {types &&
            types.map((el) => {
              return (
                <p key={el}>
                  {el}
                </p>
              )
            })}
        </div>
      </Link>
    </div>
  )
}

export default Card
