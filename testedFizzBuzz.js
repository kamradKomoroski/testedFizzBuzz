function assertEquals(x,y){
  if(x!==y){
    throw "expected " + x + " to equal " + y;
  }
}

function displayConsole(value){
  console.log(JSON.stringify(value));
}

function fizzBuzz(count){
  if(count%3 === 0 && count%5 === 0){
    return "fizzbuzz";
  } else if(count%3 === 0){
    return "fizz";
  } else if(count%5 === 0){
    return "buzz";
  } else{
    return count;
  }
}

function printAll(count,display){
  if(count <= 100){
    display(fizzBuzz(count));
    count++;
    printAll(count,display);
  }
}

function testPrintAll(){
   printAll(100,function(testParam){
     console.log(testParam);
     if(testParam !== "buzz"){
       throw "fail";
     }
   });
}

function testFizzBuzz(){
  assertEquals("buzz",fizzBuzz(100));
  assertEquals("fizz",fizzBuzz(99));
  assertEquals("fizzbuzz",fizzBuzz(15));
  assertEquals(1,fizzBuzz(1));
}

function run(){
  testPrintAll();
  testFizzBuzz();
  printAll(1,displayConsole);
}

run();
