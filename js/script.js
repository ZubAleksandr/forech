let km = [1, 0.25, 0.5, 0.75, 1, 0.25];

let cof = [1.5, 1.5, 1.5, 1, 1.4, 1, 131, 141, 54, 45, 54, 66];

let findMoreThanOne = (arr) => {
	let itog = [];
	arr.forEach((value) => {
		console.log("value" , value)
		const arrayOfSameValues = arr.filter((el) => el === value);
		console.log("arrayOfSameValues" , arrayOfSameValues)
		if (arrayOfSameValues.length > 1) {
			itog.push(value);
		}
	});

	return itog;
};

const res = findMoreThanOne(cof);
console.log("end", res);
