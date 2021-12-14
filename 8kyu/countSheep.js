//https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(arrayOfSheeps){
    let num=0;
  
    for(let i=0; i<arrayOfSheeps.length; i++){  
      
    if(arrayOfSheeps[i]==true){ 
        num++; 
    }
  } 
      return num;
}