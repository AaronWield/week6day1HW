//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through the list and 
checks that the current name is in the string passedin. The output should be: "Matched dog_name" if name 
is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findDogName(dog_string,dog_names){
    for(let i = 0; i < dog_names.length; i++){
        if(dog_string.includes(dog_names[i])){
            return "Matched dog name: " + dog_names[i]
        }else{
        return "No matches"}
    }
};
console.log(findDogName(dog_string,dog_names))

//============Exercise #2 ============//
// Write a funcion that takes in an array and removes every value that's double is over 50.

let given_arr = [13, 22, 26, 40, 1, 10]
let removeDouble = given_arr.filter(num =>{
    return (num*2) < 50
})
console.log(removeDouble)


// ===== Codewars/JS ===== 
// Problem 1: Reversed Strings
function solution(str){
    return str.split("").reverse().join("")
}

//Problem 2: Square(n) Sum
function squareSum(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++)
        sum+=numbers[i]**2;
    return sum;
}
