const _ = {
/*It takes three(3) arguments, 
The number to clamp, the lower bound and the upper bound and returns the clamped number. */

clamp(number, lower, upper){
  let lowerClampedValue = Math.max(number, lower);

  let clampedValue = Math.min(lowerClampedValue, upper);
  return clampedValue;
},

inRange(number, start, end){
  if(end===undefined){
    end=start
    start=0
} if(start > end){
  let temp = end
  end =start
  start = temp
}
let isInRange = start <= number && number < end
return isInRange
},

words(string){
  const words =string.split(' ');
  return words;
},

pad(string, length){
if(string.length >= length){
  return string;
}; 
const startPaddingLength = Math.floor((length - string.length) / 2);

const endPaddingLength = length - string.length - startPaddingLength;

const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
return paddedString;
},

has(object, key){
  const hasValue=object[key];
  if(hasValue!= undefined){
    return true;
  } return false;

},

invert(object){
  let invertedObject = {};
  for(let key in object){
    const originalValue = object[key];
    invertedObject = {originalValue : key}
  }
  return invertedObject;

},

findKey(object, predicate){
  for( let key in object){
    let value=object[key];
    let predicateReturnedValue = predicate(value);
    if (predicateReturnedValue){
      return key;
    };
    
  };

undefined
    return undefined;
},
drop (arr, num){
  if (num ===undefined){
    num =1;
  }
  let droppedArray = arr.slice(num , arr.length);

  return droppedArray;
},

dropWhile(array, predicate){
  const callback = (element, index)=>{
    return !predicate(element, index, array);
  };
  let dropNumber = array.findIndex(callback);
  let droppedArray = this.drop(array, dropNumber);
  return droppedArray;
},

chunk (array , size){
  let arrayChunks = [];
  for (let i =0; i < array.length; i += size){
    let arrayChunk= array.slice(i, i+size);
    arrayChunks.push(arrayChunk);
  }
  return arrayChunks
}


};


module.exports = _;
