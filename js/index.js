console.log("FOUR DIFFERENT WAYS OF USING Array.reduce methode in JavaScript");

// 1. Adding numbers using array.reduce method

const numbers = [1, 2, 3, 4, 5, 6]

const sum = numbers.reduce((acc, cur) =>{
    console.log(acc, cur)
    return acc + cur

} , 0)

console.log(sum)

/**for loop & for of version of the reduce method */

let total = 0;
for(i = 0; i < numbers.length; i ++){
    total = total + numbers[i]
    console.log(i,total)


}

console.log(total)

let add = 0
for(num of numbers){
    add = add + num
}

console.log('add', add)

////////////////////////////////////////////////////////



const fruits = ['Orange', 'apple', 'banana', 'apple']

const tally = fruits.reduce((acc, fruit) => {
    if(acc[fruit]){
        acc[fruit] = acc[fruit] + 1
    } else{
        acc[fruit] = 1
    }

    return acc

}, {})

console.log(tally) 

/**
 * Orange: 1
apple: 2
banana: 1

 */


// 3. reduce a array of an array into a single array

const array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
    
]

const flattened = array.reduce((acc, item) => [...acc, ...item] ,[])

console.log(flattened)





/** indexing version of the reduce method */

let arr1 = array[0]
let arr2 = array[1]
const arr1Andarr2 = [...arr1, ...arr2]
console.log(arr1Andarr2)

//////////////////////////////////////////////////////////////




//4 reduce array of string 


const char = ['I' ,'am' , 'a', 'developer']

const joinedchar = char.reduce((acc, item) => acc + ' ' + item  )

console.log(joinedchar)``