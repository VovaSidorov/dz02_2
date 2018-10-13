function numberValidation(value){
  pr_value = parseInt(value);
  if (pr_value==value){
     return pr_value;
  }
  else 
  {                                
    alert('Некорректный ввод цифры');   
    return false;
  }
}

function askFirstNimber(){
  x =  numberValidation(prompt("Введите первое число"));
    return x;
}

function askSecondNimber(){
  y =  numberValidation(prompt("Введите  второе число"));
    return y;
}

function calcSumOfNumbers(){
  var totalSum = 0;
  do {
  var leftNumber = askFirstNimber();
  } while (leftNumber == false)
  do {
  var rightNumber = askSecondNimber();
  }while (rightNumber == false)

  console.log(leftNumber);
  console.log(rightNumber);


  if (leftNumber > rightNumber){
     var leftNumber1 = rightNumber;
     var rightNumber1 = leftNumber;
    for (; leftNumber1 <= rightNumber1; leftNumber1++){
      totalSum = totalSum + leftNumber1;
    }
    return totalSum;
  }
  
  else {
  for (; leftNumber <= rightNumber; leftNumber++){
    totalSum = totalSum + leftNumber;
  }
  return totalSum;
}
}
alert(calcSumOfNumbers());