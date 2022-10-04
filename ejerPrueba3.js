function caracteresEnComun (str1, str2) {

  const str1_array = str1.split('')
  const str2_array = str2.split('')
  const result = []
  for (let i = 0; i < str1_array.length; i++) {
    for (let j = 0; j < str2_array.length; j++) {
      str1_array[i].includes(str2_array[j]) && result.push(str1_array[i])
    }
  }

  console.log([...new Set(result)]);
  return [...new Set(result)]
}

caracteresEnComun("Hola", "Mundo"); // ["o"]
caracteresEnComun("German", "Gabriela"); // ["G", "e", "r", "a"]
caracteresEnComun("Hola", "Bye"); // []
