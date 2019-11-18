
function letterCombinations(letters) {
	const result = [];
	var temp = "";
	var letLen = Math.pow(2, letters.length);

	function allOptions(options) {
		function genOptions(deep, text = '') {
			options.forEach(option => {
				temp = text;
				if (deep === 1) {
					result.push(temp += option);
					return
				}
				genOptions((deep - 1), (temp += option));
			});
		}
		genOptions(options.length);
	}

	for (var i = 0; i < letLen; i++) {
		temp = "";
		for (var j = 0; j < letters.length; j++) {
			if ((i & Math.pow(2, j))) {
				temp += letters[j]
			}
		}
		if (temp !== "") {
			allOptions(temp.split(''));
		}
	}
	return result
}


console.log(letterCombinations(['a', 'b', 'c']))