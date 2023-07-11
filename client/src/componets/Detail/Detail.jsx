import './Detail.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getDetail,cleanDetail } from '../../redux/action'


const Detail = () => {
  const dispatch = useDispatch()
  const { detail } = useParams()
  const details = useSelector((state) => state.details)

  useEffect(() => {
    dispatch(getDetail(detail))
    return () => {
      dispatch(cleanDetail())
    }
  }, [dispatch, detail])

  return (
    <div className='fondo'>
      <div className='name'>
        <h2>ID: {details?.id}</h2>
        <h1>Name: {details.name}</h1>
      </div>
      <div className='formulario'>
        <img className='imagen' src={details.image} alt='' />
        <div className='descripcion'>
          <p>Health Points: {details.hp}</p>
          <p>Attack: {details.attack}</p>
          <p>Defense: {details.defense}</p>
          <p>Speed: {details.speed && details.speed}</p>
          <p>Height: {details.height && details.height}</p>
          <p>Weight: {details.weight && details.weight}</p>

          <div className='types'>
            <p>Types:</p>
            {details.types &&
              details.types.map((el) => {
                return (
                  <p key={el}>
                    {el}
                  </p>
                )
              })}
          </div>
        </div>
      </div>
       
    </div>
  )
}

export default Detail
