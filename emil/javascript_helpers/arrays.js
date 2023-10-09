let html = '';
let result = null;

/*
 * Array methods:
 *
 * The map() creates a new array.
 * The array is populated with the results of calling a provided function on every element.
 *
 * The filter() creates a shallow copy of a portion of a given array.
 * filtered by passing the test implemented by the provided function.
 *
 * The findIndex() returns index of the first element that satisfies the provided testing function.
 * If no elements satisfy the testing function, -1 is returned.
 */

function funcDoubleNumber(n) {
    return n * 2;
}

function funcAssertEqual(n, m) {
    return (n === m);
}

function funcIsGreaterThan(n, m) {
    return (n > m);
}


// double all numbers
const myIntNumbers = [1, 2, 3];
html += title('myIntNumbers');
html += hrStart();
html += prettyPrintObject(myIntNumbers);
result = myIntNumbers.map((x) => funcDoubleNumber(x));
html += prettyPrintObject(result);

// convert to string
result = myIntNumbers.map((x) => funcDoubleNumber(x));
html += prettyPrintObject(result);
html += hrEnd();

// array with objects
const myUsers = [
    { id: 1, name: 'bob', },
    { id: 2, name: 'alice', },
];
html += prettyPrintObject(myUsers);
//find object for user
// result = myUsers.filter((x) => x.id === 1);
result = myUsers.filter((x) => funcAssertEqual(x.id, 1));
html += prettyPrintObject(result);

// find array index of user
result = myUsers.findIndex((x) => funcAssertEqual(x.id, 1));
html += prettyPrintObject(result);


// convert all string numbers to integers

const myStringNumbers = ["1", "2", "3"];


document.getElementById('arrays').innerHTML = html;
