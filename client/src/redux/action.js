  import axios from 'axios'
  import {SEARCH_POKEMON,GET_POKEMONS,FILTER_POKEMONS_TYPE,FILTER_POKEMONS_ORIGIN,ORDER_POKEMONS,GET_DETAIL,RESET_POKEMONS,GET_TYPES,
    CLEAN_DETAIL,DELETE_POKEMON,POST_POKEMON,SET_BAR,SET_BUTTONS} from './action-types'
  
  export const searchPokemon = (name) => {
    return async (dispatch) => {
      let response = await axios(`http://localhost:3001/pokemons/?name=${name}`)
      let pokemon = response.data
      return dispatch({ type: SEARCH_POKEMON, payload: pokemon })
    }
  }
  
  export const getPokemons = () => {
    return async (dispatch) => {
      const response = await axios.get('http://localhost:3001/pokemons/')
      const pokemons = response.data
  
      return dispatch({ type: GET_POKEMONS, payload: pokemons })
    }
  }
  
  export const filterPokemonsType = (payload) => {
    return { type: FILTER_POKEMONS_TYPE, payload }
  }
  
  export const filterPokemonsOrigin = (payload) => {
    return { type: FILTER_POKEMONS_ORIGIN, payload }
  }
  
  export const orderPokemons = (payload) => {
    return { type: ORDER_POKEMONS, payload }
  }
  
  export const getDetail = (id) => {
    return async (dispatch) => {
      const response = await axios(`http://localhost:3001/pokemons/${id}`)
      const pokemonDetail = response.data
      return dispatch({ type: GET_DETAIL, payload: pokemonDetail })
    }
  }
  
  export const resetPokemonsHome = () => {
    return { type: RESET_POKEMONS }
  }
  
  export const getTypes = () => {
    return async (dispatch) => {
      let response = await axios('http://localhost:3001/types')
      let types = response.data
      return dispatch({ type: GET_TYPES, payload: types })
    }
  }
  export const postPokemon = (payload) => {
    return async (dispatch) => {
      let post = await axios.post('http://localhost:3001/pokemons/', payload)
      return { type: POST_POKEMON, payload: post }
    }
  }
  
  export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
  }
  
  export const deletePokemon = (idPokemon) => {
    return async function (dispatch) {
      await axios.delete(`http://localhost:3001/pokemons/${idPokemon}`)
      dispatch({ type: DELETE_POKEMON, payload: idPokemon })
    }
  }
  
  export const setBar = () => {
    return { type: SET_BAR }
  }
  export const setButtons = (payload) => {
    return { type: SET_BUTTONS, payload }
  }
  