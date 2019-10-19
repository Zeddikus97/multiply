module.exports =  function multiply(first, second) {

	let as = first.split('').reverse();
	let bs = second.split('').reverse();

	let result = [];

	for (let i = 0; i < as.length; i++) {
		for (let j = 0; j < bs.length; j++) {
      if(result[i + j]!=null) result[i + j] = result[i + j] + as[i] * bs[j]
      else result[i + j] = as[i] * bs[j]
		}
	}

	for (let i = 0; i < result.length; i++) {
		if (result[i + 1]) result[i + 1] = result[i + 1] + ~~(result[i] / 10);
    else if (~~(result[i] / 10) != 0) result[i + 1] = ~~(result[i] / 10);
    result[i] = result[i] % 10;
	}

	return result.reverse().join('');
}
