



var x = 10, y = "Hello", z = true;

 var LegalNames = {
    1: myVariable,
    2: userAge,
    3: total_sum,
    4: num_1,
    5: is_active,
}

var Illegalvariable = {
1: "1stPlace", 
2:" my variable",
3: "total-sum",
4: "userAge!",
5: "return" ,
}










var number1 = 5;
var number2 = 3;
var sum = number1 + number2;
document.write("The sum of " + number1 + " and " + number2 + " is: " + sum);



var num1 = 10;
var num2 = 5;
var resultSubtraction = num1 - num2;
document.write(resultSubtraction);



var Multiplication1 = 10;
var Multiplication2 = 5;
var resultMultiplication = Multiplication1 * Multiplication1;
document.write(resultMultiplication); 


var percentage1 = 10;
var percentage2 = 3;
var resultModulus = percentage1 % percentage2;
document.write(resultModulus);


var beforeInitialize;
document.write("Value after variable declaration is: " + beforeInitialize + "<br>");

var initizlizeValue = 5;
document.write(" Initial value  is: " + initizlizeValue + "<br>");

var incrementNow = ++initizlizeValue ;
document.write(" Value after increment is: "  + incrementNow + "<br>" );

var SeventNow = 7;
result = incrementNow + SeventNow ;
document.write(" Value after additions is: " + result + "<br>" );

var decrement = --result;
document.write(" Value after decrement is: " + decrement + "<br>");

var remainder = decrement % 3;
document.write(" The remainder is : " + remainder + "<br>");






var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("The total cost of buying 5 movie tickets is: " + totalCost + " PKR" + "<br>");

var number = 4;
document.write(
  number + "x 1 = " + "<b>"+ number * 1 +  "<br>" + number + "x 2 = " + number * 2 + "<br>"
  + number + "x 3 = " + number * 3 + "<br>"
  + number + "x 4 = " + number * 4 + "<br>"
  + number + "x 5 = " + number * 5 + "<br>"
  + number + "x 6 = " + number * 6 + "<br>"
  + number + "x 7 = " + number * 7 + "<br>"
  + number + "x 8 = " + number * 8 + "<br>"
  + number + "x 9 = " + number * 9 + "<br>"
  + number + "x 10 = " + number *10 + "<br>"
);





var celsiusTemp = 25;
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
document.write(`${celsiusTemp}°C is ${fahrenheitTemp}°F` + "<br>");

var fahrenheitTemp2 = 77;
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
document.write(`${fahrenheitTemp2}°F is ${celsiusTemp2}°C` + "<br>" );



var priceItem1 = 10;
var priceItem2 = 20;
var quantityItem1 = 2;
var quantityItem2 = 1;
var shippingCharges = 5;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<h3>Total Cost: $" + totalCost + "</h3>");




