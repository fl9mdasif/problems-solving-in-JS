// 1.Task: Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
const people = [
    {
        name: "John Doe",
        age: 30,
        gender: "male"
    },
    {
        name: "Jane Smith",
        age: 25,
        gender: "female"
    },
    {
        name: "Emily Johnson",
        age: 40,
        gender: "female"
    },
    {
        name: "Michael Brown",
        age: 35,
        gender: "male"
    }
];

const result = people.filter(person => person.gender === "female").map(person => person.name);
console.log("problem 1:", result); // [ 'Jane Smith', 'Emily Johnson' ]



// 2.Task: Object Manipulation

// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984's Story", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

function processBooks(booksArray) {
    return booksArray.map(book => console.log("problem 2:", book.title)) // print title of all book

}
processBooks(books)



// 3.Task: Function Composition

// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;

const compositeFunction = num => addFive(double(square(num)))
console.log("problem 3", compositeFunction(4)); // Output: 37


// 4.Task: Sorting Objects

// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
const cars = [
    { make: "Toyota", model: "Camry", year: 2023 },
    { make: "Honda", model: "Civic", year: 2022 },
    { make: "Tesla", model: "Model 3", year: 2021 },
    { make: "Ford", model: "Mustang", year: 2020 },
    { make: "BMW", model: "3 Series", year: 2019 }
];

const carSortByYear = (car) => {
    return car.sort((a, b) => a.year - b.year)
}
const sortedCars = carSortByYear(cars);
console.log("problem 4", sortedCars);

// 5.Task: Find And Modify

// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

function updatePersonAge(people, name, newAge) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].name === name) {
            people[i].age = newAge;
            break;
        }
    }
    console.log("problem 5", people);
}
// Testing the updatePersonAge function
const nameToSearch = "Jane Smith"; // The name to search for
const newAge = 29; // The new age to set
updatePersonAge(people, nameToSearch, newAge);

// 6.Task: Array Reduction

// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.



// 7.  Task: Leap Year Checker

// Write A Function That Determines Whether A Given Year Is A Leap Year.

// Example: Happy New Year



// 8. Task: Unique Values

// Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.

// 09. Task: Find Maximum Value:

// Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.



// 10.Task: Advanced Sorting

// Create An Array Of Objects Representing Students With 'Name' And 'Grades' Properties. Write A Function To Sort The Students By Average Grade In Descending Order.



// 11. Task: Functional Programming - Reduce

// Write A Function That Uses The Reduce Function To Calculate The Total Value Of An Array Of Objects With A 'Quantity' And 'Price' Property.Interview

