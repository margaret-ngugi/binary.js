//Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6
function numbers(num,target){
    let left =0
    let right =num.length-1;
    while(left<=right){
        let middle = Math.floor((left+right)/2);
        if (num[middle]===target){
            return middle;
        }
        else if (num(middle)<target){
            left = middle+1
        }
        else{
            right=middle-1
        }
    }
    return null
}
let num =[45,12,6,89,2,5]
let target =6
console.log(numbers(num,target))


//Given an unsorted array of numbers return the sorted array in descending order
//let arr=[123,89,5,23,9,56]
function merge(left, right) {
    let arr = []
    
    while (left.length && right.length) {
        
        if (left[0] < right[0]){
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    
    
    return [ ...arr, ...left, ...right ]
}
function mergeSort(arr){
    const half=arr.length/2
    if(arr.length<2){

    
    return arr
}
const left =arr.splice(0,half)
return merge(mergeSort(left),mergeSort(arr))
}
let arr=[123,89,5,23,9,56]
console.log(mergeSort(arr))




//Given the following array, search for the following target
//let target = 34
//let arr2 = [1,4,78,2,67,3];
// function numbers(num,target){
//     let left =0
//     let right =num.length-1;
//     while(left<=right){
//         let middle = Math.floor((left+right)/2);
//         if (num[middle]===target){
//             return middle;
//         }
//         else if (num(middle)<target){
//             left = middle+1
//         }
//         else{
//             right=middle-1
//         }
//     }
//     return null
// }
// let target = 34
// let arr2 = [1,4,78,2,67,3];
// console