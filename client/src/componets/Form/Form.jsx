import './Form.css';
import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemon } from '../../redux/action';
import Validate from './validate';

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [, setDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const name = useRef(null);
  const types = useSelector((state) => state.types);
  const [input, setInput] = useState({
    name: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '1',
    height: '1',
    weight: '1',
    types: [],
  });


  useEffect(() => {
    dispatch(getTypes());
    name.current.focus();
  }, [dispatch]);

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    setErrors(Validate({ ...input, [event.target.name]: event.target.value }));

    const newErrors = Validate({
      ...input,
      [event.target.name]: event.target.value,
    });
    const hasErrors = Object.keys(newErrors).length > 0;
    setDisabled(hasErrors);
  };

  const handleSelect = (event) => {
    if (input.types.includes(event.target.value)) return;
    else {
      setDisabled(true);
      setInput({
        ...input,
        types: [...input.types, event.target.value],
      });
      setErrors(
        Validate({ ...input, types: [...input.types, event.target.value] })
      );

      const newErrors = Validate({
        ...input,
        types: [...input.types, event.target.value],
      });
      const hasErrors = Object.keys(newErrors).length > 0;
      setDisabled(hasErrors);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(postPokemon(input));
      alert('Pokemon creado');
      setInput({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '1',
        height: '1',
        weight: '1',
        types: [],
      });
      history.push('/home');
    } else {
      alert('Por favor, completa todos los campos');
    }
  };

  const handleDelete = (item) => {
    setInput({
      ...input,
      types: input.types.filter((type) => item !== type),
    });
    setErrors(
      Validate({
        ...input,
        types: input.types.filter((type) => item !== type),
      })
    );
    const newErrors = Validate({
      ...input,
      types: input.types.filter((type) => item !== type),
    });
    const hasErrors = Object.keys(newErrors).length > 0;
    setDisabled(hasErrors);
  };

  return (
    <div className="todo">
      <h1 className="fondo">Crea tu propio Pokémon</h1>
      <div className="fondo">
        <form onSubmit={handleSubmit}>
          <div className="formulario">
            <div className="from1">
              <div>
                <label>Nombre</label>
                <input
                  type="text"
                  ref={name}
                  value={input.name}
                  name="name"
                  onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
              </div>
              <div>
                <label>HP (Puntos de vida)</label>
                <input
                  type="range"
                  min="1"
                  max="99"
                  value={input.hp}
                  name="hp"
                  onChange={handleChange}
                />
                {errors.hp && errors.hp ? (
                  <p>{errors.hp}</p>
                ) : (
                  <p> {input.hp} puntos de vida </p>
                )}
              </div>
              <div>
                <label>Ataque</label>
                <input
                  type="range"
                  min="1"
                  max="99"
                  value={input.attack}
                  name="attack"
                  onChange={handleChange}
                />
                {errors.attack && errors.attack ? (
                  <p>{errors.attack}</p>
                ) : (
                  <p> {input.attack} puntos </p>
                )}
              </div>
              <div>
                <label>Defensa</label>
                <input
                  type="range"
                  min="1"
                  max="99"
                  value={input.defense}
                  name="defense"
                  onChange={handleChange}
                />
                {errors.defense && errors.defense ? (
                  <p>{errors.defense}</p>
                ) : (
                  <p> {input.defense} puntos </p>
                )}
              </div>
            </div>
            <div>
              <div>
                <label>Velocidad</label>
                <input
                  type="range"
                  min="1"
                  value={input.speed}
                  name="speed"
                  onChange={handleChange}
                />
                <p> {input.speed} km/h</p>
              </div>
              <div>
                <label>Altura</label>
                <input
                  type="range"
                  min="1"
                  max="99"
                  value={input.height}
                  name="height"
                  onChange={handleChange}
                />
                <p> {input.height} cm.</p>
              </div>
              <div>
                <label>Peso</label>
                <input
                  type="range"
                  min="1"
                  value={input.weight}
                  name="weight"
                  onChange={handleChange}
                />
                <p> {input.weight} kg.</p>
              </div>
              <div>
                <select onChange={handleSelect}>
                  {types.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {errors.types && <p>{errors.types}</p>}

                <div className='poderes'>
                  {input.types.map((type) => {
                    if (type === null) return null;
                    return (
                      <div key={type}>
                        <button onClick={() => handleDelete(type)}>x</button>
                        <p>{type}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <button className='botoncrear' type="submit">Crear Pokémon</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
