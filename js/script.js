const km = [25, 45,  95, 125, 150, 200, 325, 250, 165, 350]

const cof = [1, 1.5, 1,  1.5, 1.2, 1.5, 1 ,  0.5, 1.2, 1.5];


const res = cof.reduce((a,v,i)=>(a[v]=(a[v]||0)+km[i],a),{});

console.log(res);

console.log(Object.values(res)); 


