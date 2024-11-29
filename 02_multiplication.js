

let num1=10;
let num2=5;
let mul=num1*num2;
console.log(mul);

//using arrow function

let multiplication=(num1,num2)=>{
        let result=num1*num2;
        console.log(result);   
}
let res=multiplication(2,5);



//for loop

// Function for multiplication 
function multiply(a, b) { 
	let result = 0; 
	for (let i = 1; i <= b; i++) { 
		result += a; 
	} 
	return result; 
} 

// Calling function and storing the returned value 
let result = multiply(5, 10); // 50 

// Display the result 
console.log(result);

