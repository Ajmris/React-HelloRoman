//const container=document.querySelector('h1').innerHTML=combineAge(data);
export const combineAge=(arr)=>arr.reduce((acc,item)=>acc+=item.age, 0);
export const renderAge=(element, data)=>element.innerHTML=combineAge(data);