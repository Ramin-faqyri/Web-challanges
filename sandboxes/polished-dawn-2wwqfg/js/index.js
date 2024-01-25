console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const bookTitle = "The Lord of the Javascript";
const author = "Mario";
let rating = 4.2;
let salesnumber = 120;

console.log("Title: " + bookTitle);
console.log("Author: " + author);
console.log("Rating: " + rating);
console.log("Sales: " + salesnumber);
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example
Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/
rating++;
console.log("Rating: " + rating);
console.log("Rating: " + rating);
console.log("Rating: " + rating);

// --v-- write your code here --v--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function book() {
  const bookTitle = "The Lord of the Javascript";
  const author = "Mario";
  let rating = 6.2;
  let salesnumber = 140;
  console.log("Title: " + bookTitle);
  console.log("Author: " + author);
  console.log("Rating: " + rating);
  console.log("Sales: " + salesnumber);
}

book();
// --^-- write your code here --^--
