let km = [1, 0.25, 0.5, 0.75, 1, 0.25];

let cof = [1.5, 1.5, 1.5, 1, 1.4, 1, 131, 141, 54, 45, 54, 66];

let findMoreThanOne = (arr) => {
	let itog = [];
	arr.forEach((value) => {
		if (arr.filter((el) => el === value).length > 1) {
			itog.push(cof[i]);
		}
	});

	return itog;
};

const res = findMoreThanOne(cof);
console.log("end", res);
