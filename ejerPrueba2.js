function frecuencias (str) {

	const object = {};
	const strClean = str.replace(/\s/g, '')
		for(let i = 0; i < strClean.length; i++) {
			if(object[strClean[i]]){
				object[strClean[i]] = object[strClean[i]] + 1;
			}else {
				object[strClean[i]] = 1;
			}
		}

		return object;
}
console.log(frecuencias("hola mundo")) // { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
console.log(frecuencias("anita lava la tina")) // { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }
