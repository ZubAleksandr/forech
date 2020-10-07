  
let km = [1, 0.25, 0.5, 0.75, 1, 0.25]

let cof =[1.5, 1.5, 1.5, 1, 1.4, 1];

let itog = [];

	for(let i = 0; i < cof.length; i++){
		console.log(itog, '1');
		for(let k = i+1; k < cof.length; k++){
			console.log(itog, '2');
			if(cof[i] === cof[k]){
				itog.push( km[i] + km[k]);
				console.log(itog, '3');
				
			}
		}
	}

	console.log(itog);

	