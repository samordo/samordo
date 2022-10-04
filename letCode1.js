function isAnagram(s, t) {

  const arrayS = s.split('').sort();
  const arrayT = t.split('').sort();

  if (arrayS.length !== arrayT.length) {
    return false
  } else {
    const values = arrayT.map((letter, indexLetter) => {
        return arrayS[indexLetter] === arrayT[indexLetter]
    })
    const finalResult = values.includes(false) ? false : true
    console.log(finalResult)
    return finalResult
  }

}

isAnagram("anagram","nagaram")
