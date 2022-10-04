const nums = [0,1,0,3,12] ;
function moveZeroes (array) {
  const ceros = [] ;
  const numsWhithOutCero = array.filter((number) => number > 0)

  for (let i = 0 ; i < array.length ; i++){
    if (array[i] === 0 ) {
      ceros.push(array[i])
    }
  }
  const finalResult = numsWhithOutCero.concat(ceros);
  return finalResult
}
console.log(moveZeroes(nums))
