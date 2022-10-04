
  const ajustarTexto = (text, number) => {
    let newText = []

    if (text.length < number) {
      const difference = number - text.length
      for (let i = 0; i < difference; i++) {
        newText = text += '.'
      }
    } else {
      newText = text.slice(0, number)
    }

    return newText;
  }

  console.log(ajustarTexto("",3)) // " "
  console.log(ajustarTexto("hola",2)) // "ho"
  console.log(ajustarTexto("Hola",0)) // ""
  console.log(ajustarTexto("Hola",5)) // "Hola "
