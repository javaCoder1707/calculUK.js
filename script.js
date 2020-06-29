function plus (){
    var num1, num2;
    num1 = document.getElementById('a1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('a2').value;
    num2 = parseInt(num2);
    
    result = num1+num2;
    
document.getElementById('out') .innerHTML = result;
}

function minus () {
   var num1, num2;
    num1 = document.getElementById('a1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('a2').value;
    num2 = parseInt(num2);

    result = num1-num2;

document.getElementById('out') .innerHTML = result;

}

function multiply (){
   var num1, num2;
    num1 = document.getElementById('a1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('a2').value;
    num2 = parseInt(num2);

    result = num1*num2;

    document.getElementById('out') .innerHTML = result;

}

function splitUp(){
   var num1, num2;
   num1 = document.getElementById('a1').value;
   num1 = parseInt(num1);

   num2 = document.getElementById('a2').value;
   num2 = parseInt(num2);

   result = num1/num2;

   document.getElementById('out') .innerHTML = result;

}
