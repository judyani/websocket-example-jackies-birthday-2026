function fizzBuzzBasic(n) {
  for (let i = 1; 1 <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (1 % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
//fizzBuzzBasic(100)

function fizzBuzzIntermediate(n) {
  for (let i = 1; i <= n; i++) {
      let output = "";
      if (i % 3 === 0)
          output += "fizz"
      if (i % 5 === 0)
          output += "buzz"
      console.log(output || i);
    } 
}
fizzBuzzIntermediate(15);


function fizzBuzzAdvanced(n) {
  for (let i = 1; i <= n; i++) {
      let output = (i % 3===0 ? "fizz" : "") + (1 % 5===0 ? "buzz" : "");
      console.log(output || i);
    
  }
}
fizzBuzzIntermediate(100);
