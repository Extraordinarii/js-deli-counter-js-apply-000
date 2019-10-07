
function takeANumber(line,name){ //Function takes in the line and name passed 
  line.push(name) //Adds the person to the line
  var b = line.length // Assigns b with the current number of people on line
  return( `Welcome, ${name}. You are number ${b} in line.`) //prints out name //and the number that the person is on  
} 
function nowServing(line){ //Function takes in the argument === line 
  if(line.length>0){ // Conditional, if the length of the line is > 0 
  return `Currently serving ${line.shift()}.` //then it returns the first person
  //in this case the first person on the line/ the individual on the array 
  }else{ //else statement checks if the first condition failed
    return("There is nobody waiting to be served!")
  } //then it returns claiming there's no one else
}

function currentLine(line){
  var count = 1 //separate counter that is used to count people (i had issues using i as the pointer)
  var emptyarray = [] // empty array to store the individuals, their names and places on the line.
if(line.length>1){ //a conditional check whether there is someone on line 
  for(var i=0; i<line.length; i++){ //for loop, var i points to the array
      if(count===1){ //Second if statement is a needed conditional statement or else the code will print out 1. Bill,2. Jane, 3.Ann 
    emptyarray.push(`${count}. ` + `${line[i]}`) // ${count} starts at 1, meanwhile the loop is counting from the index of 0 = Bill
    count++ //We need the counter to go up by 1 before the end of the if statement
      }else{ //once the initial if statement is finished, it will print out 1. Bill, 
        emptyarray.push(` ${count}.` + ` ${line[i]}`) //now that the issue of 1. Bill,2.Jane are fixed with the second if statement 
        count++ // counter goes up to assign additional individuals with their respective numbers.
      }
  }return `The line is currently: ${emptyarray}`
}else{return "The line is currently empty."
} //if the first condition is false it returns the line is empty
} 
