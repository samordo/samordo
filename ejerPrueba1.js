const string = ["abaa", "abab", "abc"];

function cantNum (str) {

	const object = {};

		for(let i = 0; i < str.length; i++) {
			if(object[str[i]]){
				object[str[i]] = object[str[i]] + 1;
			}else {
				object[str[i]] = 1;
			}
		}

		return object;
}

function  numDuplicados (str) {

	let cant = 0;

	const count = cantNum (str);

	Object.entries(count).forEach(([key, value]) => {
		value > 1 && cant ++;
	});
  console.log(cant)
  return cant
};
numDuplicados("abcaa") // 1
numDuplicados("abab") // 2
numDuplicados("abc") // 0
