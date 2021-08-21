# Lodash
Implementing functionalities of the Lodash library.

Lodash is a JavaScript library for delivering modularity, performance and  extras. 
In this project, i implemented some of the most exciting functionality from the Lodash library
which provide methods that add new functionality for numbers, strings, objects and arrays.

Below are some of the methods implemented:
1. clamp ()
This method clamps number within the inclusive lower and upper bounds.
It takes three(3) argument, 
The number to clamp, the lower bound and the upper bound and returns the clamped number.

2. inRange ()
Takes three argument, the number to check, the start of the range and the end of the range. It returns a boolean, ie True, if the number is in the range, else false.

3. words()
It takes a string and splits it into an array of its words.

4. pad()
Takes two arguments: a string and a length and adds spaces evenly to both sides of the string to make it reach the desired length.

5. has()
Takes two arguments: an object and a key
Checks to see if the provided object contains a value at the specified key
And returns true if the object contains a value at the key and will return false if not

6. invert()
Takes one argument: an object
Iterates through each key / value pair in the provided object and swaps the key and value

7. findKey()
Takes two arguments: an object and a predicate function — a function that returns a boolean value
Iterates through each key / value pair in the provided object and calls the predicate function with the value
Returns the first key that has a value that returns a truthy value from the predicate function
Or undefined if no values return truthy values from the predicate function

8. drop ()
Takes two arguments: an array and a number representing the number of items to drop from the beginning of the array
Returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array
If the number of elements to drop is unspecified, your method drops one element

9. dropWhile()
Takes two arguments: an array and a predicate function
The supplied predicate function takes three arguments: the current element, the current element index, and the whole array
Creates a new copy of the supplied array, dropping elements from the beginning of the array until an element causes the predicate function to return a falsy value

10.  chunk()
Takes two arguments: an array and a size
Breaks up the supplied array into arrays of the specified size
Returns an array containing all of the previously-created array chunks in the order of the original array
If the array can’t be broken up evenly, the last chunk will be smaller than the specified size
If no size is supplied to the method, the size is set to 1
