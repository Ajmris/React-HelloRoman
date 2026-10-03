import {data as otherData} from './data.js';
import {combineAge, renderAge} from './helpers.js';

const data='roman';
console.log(otherData, data);
console.log(combineAge(otherData));

const container=document.querySelector('h1');
renderAge(container, otherData);