const Validate = (input) => {
  let errors = {}
  if (!/^[a-zA-Z]+$/.test(input.name)) {
    errors.name = 'Tu pokemon no puede tener numeros en el nombre '
  }
  if (!input.name) {
    errors.name = 'Ingresa el nombre de tu pokemon'
  }

  if (Number(input.hp) < 1 || Number(input.hp) > 99) {
    errors.hp = 'Tu pokemon puede tener de 1-99 en puntos de vida'
  }

  if (Number(input.attack) < 1 || Number(input.attack) > 99) {
    errors.attack = 'Tu pokemon puede tener de 1-99 en puntos de ataque'
  }

  if (Number(input.defense) < 1 || Number(input.defense) > 99) {
    errors.defense = 'Tu pokemon puede tener de 1-99 en puntos de defensa'
  }
  if (input.types.length < 1 || input.types.length > 3) {
    errors.types = 'Tu pokemon puede tener maximo 3 tipos de poderes y minimo 1'
  }
  return errors
}

export default Validate
