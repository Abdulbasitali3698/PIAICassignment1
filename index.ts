//farenheit to celsius
//c=(f-32)*5/9
/*var farenheit:number=98.6;
var celsius:number=((farenheit-32)*5/9);
console.log(celsius);*/

/*var f:number=98;
var celsius:number=((f-32)*5/9);
var c:number=50;
var farenheit:number=((9/5*c)+32);
if(f==98.6 )
{
    console.log(celsius);
}
else if(c==50 )
{
    console.log(farenheit);
}
*/

//calculate percentage
// formula of percentage=given/total*100
/*var given:number=50;
var total:number=100;
var percentage:number=given/total*100;
console.log(percentage,"%");
*/

//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
/*var day:number=23;
var totaldays:number= day/7;
var remainigdays:number=day%7;
console.log(totaldays,"weeks and",remainigdays , "days");*/

//  Write a program that calculates the discount for a product based on its price. If the price is above $100,
//  apply a 10% discount; otherwise, apply a 5% discount.
/*var productprice:number=98;
if(productprice>=100)
{
    var firstdiscount:number=productprice-(productprice*10/100);
    console.log("your price after 10% discount", firstdiscount);
}
else
{
    var seconddiscount:number=productprice-(productprice*5/100);
    console.log("your price after 5% dicount", seconddiscount);
}*/

//Create a program that determines the category of a user-provided age.
// If the age is between 0 and 12, print "Child."
// If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

/*var userage:number=20;
if(userage>=0 && userage<=12)
{
    console.log("The age you selected is the 'CHILD' age" );

}
else if(userage>=13 && userage<=19)
{
    console.log("The age you selected is the 'TEENAGER' age");
}
else
{
    console.log("you are 'ADULT'");
}
*/
//Write a program that takes temperature and check it. 
//If it is cold then suggest the user to wear warm clothes and so on according to the weather.

/*var temperature:number=40;
if(temperature>=1 && temperature<=20)
{
    console.log("you have to wear warm clothes");

}
else if(temperature>=21 && temperature<=45)
{
    console.log("you have to wear summer clothes")
}
else
{
    console.log("its too hot")
}
*/
//Write a program that 
//checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
/*var checknumber:number=26;
if(checknumber/3 && checknumber%3==0)
{
    console.log("your given number is divisible by 3");
}
else if(checknumber/5 && checknumber%5==0)
{
    console.log("your number is divisible by 5");
}
else
{
    console.log("you type another number which is not divisible by 3 or 5");
}*/
//Develop a program that determines the day of the week. 
//Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name
/*var givennumber:number=9;
if(givennumber==1)
{
    console.log("you select the day MONDAY");
}
else if(givennumber==2)
{
    console.log("you select the day TUESDAY");
}
else if(givennumber==3)
{
    console.log("you select the day WEDNESDAY");
}
else if(givennumber==4)
{
    console.log("you select the day THURSDAY");
}else if(givennumber==5)
{
    console.log("you select the day FRIDAY");
}else if(givennumber==6)
{
    console.log("you select the day SATURDAY");
}
else if(givennumber==7)
{
    console.log("you select the day SUNDAY");
}
else
{
    console.log("you select nothing");
}
*/
//Write a program that checks if the given year is leap year or not.

/*var year:number=2000;
if( year%4==0 && year%100==0 && year%400==0)
{
    console.log("year is leap year");
}
else
{
    console.log("year is not leap year");
}
*/
//Write a program that takes the number of units consumed by a user 
//if it is greater than 100 then add 10% tax
// if greater than 200 then add 15% of tax so on up to
// if greater than 500 then add 25% of tax
/*var units:number=500;
var unitprice:number=10;
var totalunit:number=units*unitprice;
if(units>=100 && units<200)
{
    console.log("your bill after 10% tax", totalunit+(totalunit*10/100));
}
else if(units>=200 && units<500 )
{
    console.log("your bill after 10% tax", totalunit+(totalunit*15/100));
}
else if(units>=500 )
{
    console.log("your bill after 10% tax", totalunit+(totalunit*25/100));
}
else
{
    console.log("your bill is out of range");
}
*/
