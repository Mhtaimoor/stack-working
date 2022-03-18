// Declaring and assigning a variable
var a = 5;

// Defining Function that return text.
function mytext() {
    let text = "Hello World!";
    return text;
}
document.getElementById("text").innerHTML = mytext();

// Function that returns number of characters in a string.
function lenString() {
    let a = "Hello World!";
    let len = a.length;
    return len;
}
document.getElementById("len").innerHTML = lenString();

// Function that returns lowercase and uppercase letters of a String.
function lowerUpper() {
    let str = "Hello";
    let low = str.toLowerCase();
    let up = str.toUpperCase();
    return low + " " + up;
}
document.getElementById("lowercase").innerHTML = lowerUpper();

// Function to replace string word with other
function replaceStr() {
    let str = "Hello World!";
    let result = str.replace("World", "Taimoor");
    return result;
}
document.getElementById("replace").innerHTML = replaceStr();

// Function to add amount using surcharge
function addSurcharge(a) {
    let amount = 100;
    let result = amount + a;
    return result;
}
document.getElementById("surcharge").innerHTML = addSurcharge(100);

// Function to get first element of an array
function getElement() {
    let arr = ["Muhammad", "Taimoor", "Ali"];
    let element = arr[0];
    return element;
}
document.getElementById("element").innerHTML = getElement();

// Current Date
const date = new Date();
document.getElementById("date").innerHTML = date;

// Area of the Triangle
var base = 12;
var height = 15;
area = (base * height) / 2;
document.getElementById("area").innerHTML = area;

// Days Until Christmas
let today = new Date();
// Get the year of the current date
let christmasYear = today.getFullYear();

// Check if the current date is already past by checking
// if the month is Decemeber and the current day is greater than 25

if (today.getMonth() == 11 && today.getDate() > 25) {
    // Add an year so that the next Christmas date could be used
    christmasYear = christmasYear + 1;
}

// Get the date of the next Christmas
let christmasDate = new Date(christmasYear, 11, 25);

// Get the number of milliseconds in 1 day
let dayMilliseconds = 1000 * 60 * 60 * 24;

// Get the remaining amount of days
let remainingDays = Math.ceil(
    (christmasDate.getTime() - today.getTime()) / dayMilliseconds
);

// Write it to the page
document.getElementById("christmas").innerHTML = remainingDays;

// Convert Temprature
function temperatureConverter() {
    fahren = 205;
    celcius = (fahren - 32) / 1.8;
    return celcius;
}
document.getElementById("fehrenheit").innerHTML = temperatureConverter();

// Function to get Url
function getURL() {
    var url = window.location.href;
    return url;
}
document.getElementById("url").innerHTML = getURL();

// Function to get sum and product of 2 numbers
function sumPro() {
    var a = 2;
    var b = 3;
    var sum = a + b;
    var pro = a * b;
    return "Sum is = " + sum + " & " + "Product is = " + pro;
}
document.getElementById("sumpro").innerHTML = sumPro();

// Function for finding Duplicates in array
function findAndReturnDuplicatesInArray() {
    let list = [1, 2, 3, 4, 2, 3, 4, 5, 32, 3];
    var object = {};
    var result = [];

    list.forEach(function (item) {
        if (!object[item])
            object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
        if (object[prop] >= 2) {
            result.push(prop);
        }
    }

    return result;
}
document.getElementById("duplicates").innerHTML = findAndReturnDuplicatesInArray()


// Function to check the giver matrix is diagnal or not
function is_diagonal_matrix() {
    let matrix = [[1, 0, 0], [0, 2, 0], [0, 0, 3]];
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (i !== j && matrix[i][j] !== 0)
                return false;
        }
    }
    return true;
}
document.getElementById("matrix").innerHTML = is_diagonal_matrix();

// Find Longest String in Array
function longest_str_in_array() {
    let arr = ["abc", "abcde", "Taimoor", "Muhammad Taimoor"];
    var max_str = arr[0].length;
    var ans = arr[0];
    for (var i = 1; i < arr.length; i++) {
        var maxi = arr[i].length;
        if (maxi > max_str) {
            ans = arr[i];
            max_str = maxi;
        }
    }
    return ans;
}
document.getElementById("longArr").innerHTML = longest_str_in_array();


// Function to check Even Number
function digit_even(){
    var num = 2;
    if(num % 2 == 0){
        return "Even Number";
    }
    else{
        return "Odd Number";
    }
}
document.getElementById("even").innerHTML = digit_even();