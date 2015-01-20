FIRST
var arr = [1,2,3];

//create a function named 'first' that returns the first object from a given array

//alert the result of your function
var first = function(){
 var x = arr[0]; 
    return x;
}

alert(first());

LAST
var arr = [1,2,3];

//create a function named 'last' that returns the last object from a given array

//alert the result of your function
var last = function(){
 var x = arr[2]; 
    return x;
}

alert(last());


ADD ITEMS
//Fix 'arr' below so that it's an array full of integers from 0-10
var arr = [0,1,4,5,7,8,10];


arr.length = 10;
var max = arr.length;
alert("max = " + max);


for (i= 0; i< max; i++){
    arr[i] = i;
    alert("array position " + i + " is equal to " + arr[i]);
}

FIRST LOOP
//Alert every item in arr.
var arr = [1,2,3,4,5];


var max = arr.length;
for (i= 0; i< max; i++){
    arr[i] = i;
    alert("array position " + i + " is equal to " + arr[i]);
}


BACKWARDS
//Loop through arr in reverse alerting every item
var arr = [1,2,3,4,5]; //should alert 5 then 4 then 3 etc.

var max = arr.length;
for (i=max-1; i>= 0; i--){
    alert("the position " + i + " is " + arr[i]);
}

EVENS
//Loop through arr removing all values that aren't even 
//hint x % 2 --> checks for even numbers
var arr = [1,2,3,6,22,98,45,23,22,12];

var max_value = arr.length;
alert("The length of the array is " + max_value);
for(var i = 0; i < max_value; i++){
    var x = arr[i];
  
    if(x % 2 === 0)
        arr.splice(i,1);
       
}
var new_value = arr.length;
alert("The new length of the array is " + new_value);

EVENS AND ODDS
//Write a loop that loops through nums, if the item is even, it adds it to the evens array, if the item is odd, it adds it to the odds array.
var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];

var max_value = nums.length;
alert("The length of the array is " + max_value);
for(var i = 0; i < max_value; i++){
    var x = nums[i];
  
    if(x % 2 === 0)
        evens.splice(i,0,i);
    else
        odds.splice(i,0,i);
       
}
var evens_value = evens.length;
alert("The new length of the array is " + evens_value);
var odds_value = odds.length;
alert("The odds length is " + odds_value);

FLAG
//below you're given a function that will return a random number between 0 and 30, and an array full or numbers. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false

var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}

var arr = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

//code here
var flag = function(){
    alert("first line");
    var rnumber = getRandomArbitrary();
    alert("rnumber is " + rnumber);
    var max = arr.length;
    alert(" max is  " + max);
    for(var i = 0; i < max; i++){
        if(rnumber === arr[i]){
        alert("True");
            break;
        }      
     else 
        alert("False " + arr[i] + " is not found.");
    }
}
flag();

REVERSE

//Write a function called reverse that takes in a string ('str') and returns that string after it's been reversed

var str = 'this is my sentence';

var reverse = function(i_str){
    load the string into an array, then reverse the array and read the string back out.
}

//reverse(str) --> "ecnetnes ym si siht"

var str = 'this is my sentence';

var reverse = function(i_str){
     var arr = i_str.split("");
     arr.reverse()
    i_str = arr.join("");
    alert(i_str);
}

reverse(str);

//reverse(str) --> "ecnetnes ym si siht"

GROCERY LIST

//Here we're going to write a function that mimics going shopping and checking things off of our grocery list, and adding new items to our list. Write a function that takes a single parameter, loops through our grocery list, if the parameter (or the thing you passed in) matches an item in myGroceryList, remove that item from the list. Once you do that, write another function that accepts a  single parameter and adds that parameter to the list.

var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];

var shopping = function(item){
 var max = myGroceryList.length;
    for(var i = 0; i < max; i++){  
        if(item === myGroceryList[i]){
           myGroceryList.splice(i,1);
           }
    }
}
var addItem = function(item){
     var max = myGroceryList.length;
    var y = myGroceryList.push(item);
}
//removeItem('chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem('Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];
shopping('chips');
addItem('Jerky');
var x = myGroceryList;

alert(x);

COPY AND ADD
//Create a copy of firstArray and save it into secondArray. Then, add 6 and 7 to the end of first array. When you run this firstArray should be just [1,2,3,4,5] and secondArray will be [1,2,3,4,5,6,7] if you created your copy correctly.

var firstArray = [1,2,3,4,5];
var secondArray = firstArray.slice(0);
secondArray.splice(5,2,'6','7');

alert(firstArray) //[1,2,3,4,5];
alert(secondArray) //[1,2,3,4,5,6,7];

COMPACT
var arr = [1,0,null,2,'false',undefined,NaN,1+1,5-5,'undefined', 'asdf',''];

//create a function named 'compact' that returns the array but with all "falsy" values removed
var compact = function(){
 var max = arr.length;
    alert(max);
       for(var i = max; i >= 0; i--){
        if(arr[i] === '' || arr[i] === 'undefined' || arr[i] === 'null' || arr[i] === isNaN(NaN) || arr[i] === 0 || arr[i] === 'false') 
            arr.splice(i,1);
    }
}

//alert the result of your function
compact();
alert(arr);
