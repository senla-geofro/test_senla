function getPrimeNumber(maxNo) {
  var list = [];  
  for(var n = 2; n <= maxNo; n++){
    list.push(n);
  }
  
  var current = 0;
  for(var i = 0; i < list.length; i++) {
    
    for (var j = current+1; j < list.length; j++) {
      if (list[j] % list[current] == 0) {
        list[j] = 0;
      }
    }
    
    current++;
    if ((list[i] * list[i]) > maxNo)  {
      break;
    }
  }  

  return list.filter(Number).join();
}

function getFibonacciNumber(maxNo) {  
  var list = [];  
  function numFbn(n){
    if (n < 2) {
      return n;
    } else {
      return numFbn(n-1) + numFbn(n-2);
    }
  }
  
  var i = 1; 
  var current = 0;
  while (current < maxNo) {
    current = numFbn(i);
    if (current <= maxNo) {
      list[i-1] = current;   
    } 
    i++;
  }
  
  return list.join();
}

function checkIntersection(x1,y1,x2,y2,x3,y3,x4,y4) {
  if (x1>=x2) {
    var a = x1; x1 = x2; x2 = a;
    var b = y1; y1 = y2; y2 = b;  
  }
  if (x3>=x4) {
    var c = x3; x3 = x4; x4 = c;
    var d = y3; y3 = y4; y4 = d;  
  }
    
  var k1 = 0;
  if (y2 != y1) {
    k1 = (y2 - y1)/(x2 - x1);
  } 
  
  var k2 = 0;
  if (y4 != y3) {
    k2 = (y4 - y3)/(x4 - x3);
  } 
  
  if (k1==k2) {
    return 'Отрезки параллельны';
  }
  if ((Math.abs(k1)==Infinity)&&(Math.abs(k2)==Infinity)) {
    return 'Отрезки параллельны';
  }
  
  var b1 = y1 - k1 * x1;
  var b2 = y3 - k2 * x3;
  
  var x0 = (b2 - b1)/(k1 - k2);
  var y0 = k1 * x0 + b1; 

  var resultStr = '';
  if (((x0-x1)/(x2-x1)==(y0-y1)/(y2-y1)) &&
  ((x0-x3)/(x4-x3)==(y0-y3)/(y4-y3))){
    resultStr = 'Точка пересечения отрезков x='+x0+' y='+y0;
  } else {
    resultStr = 'Точка пересечения прямых лежит не на отрезках';
  }
  return resultStr;
}

function GCDandMCD(n1,n2) {
  function gcd(n1, n2) {
   if (n2 == 0) {
      return n1;
    } else {
      return gcd(n2, n1%n2);
    }
  }
  
  function mcd(n1, n2) {
    return (n1/gcd(n1,n2))*n2;  
  }

  var result = 'НОК = '+gcd(n1, n2)+ ' НОД = '+mcd(n1, n2);
  return result;
}

function checkPalindrome(word) {
        console.log('>>> '+word);
  word = word.toLocaleLowerCase();
  var lng = word.length; var rtn = true;
  var steps = (lng / 2) - (lng / 2) % 1;
  var head = 0; var tail = lng - 1;
  
  for (var i=0; i < steps; i++) {
    rtn = (word.charAt(head) == word.charAt(tail));
    head++; tail--; steps--;
  }
  
  var textResult = '';
  if (rtn) {
    textResult = 'успех';
  } else {
    textResult = 'провал';
  }
  
  return textResult;
}

function clearCharNumber(userStr) {
  var resultStr = ''; 
  
  var lng = userStr.length;  
  for (var i=0; i < lng; i++){
    var code = userStr.charCodeAt(i);
     if (!(code >= 48 && code <= 57)){
      resultStr += userStr[i];
    }    
  }
  
  return resultStr;
}