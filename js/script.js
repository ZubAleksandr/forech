  
let km = [1, 0.25, 0.5, 0.75, 1, 0.25]

let cof =[1.5, 1.5, 1.5, 1, 1.4, 1 , 131, 141 ,54 ,45 ,54 ,66];

const findMoreThanOne = (arr)=>{
	let itog = [];
	for(let i = 0; i < arr.length; i++){
		console.log(itog, '1');
		for(let k = i+1; k < arr.length; k++){
			console.log(itog, '2');
			if(cof[i] === cof[k]){
				//itog.push( km[i] + km[k]);
				itog.push( );
				console.log(itog, '3');
				
			}
		}
	}
	
	return itog;
}
const res = findMoreThanOne(cof);
console.log("end" , res);



	

	console.log(itog);

	
