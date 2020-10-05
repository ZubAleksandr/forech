let km = [1, 0.25, 0.5, 0.75, 1, 0.25]

let cof =[1.5, 1.5, 0.9, 1, 1.4, 1];

let itog = [];

	for(let i = 0; i < 6; i++){
		for(let k = i+1; k < 6; k++){
			if(cof[i] === cof[k]){
				itog = cof[i] + cof[k];
				console.log(itog);
			}
		}
	}
	