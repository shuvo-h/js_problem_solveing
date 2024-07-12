/*
1.Task: Array Filtering And Mapping
Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
*/

const persons = [
    {name:"a",age:10,gender:"male"},
    {name:"b",age:10,gender:"female"},
    {name:"c",age:10,gender:"female"},
    {name:"d",age:10,gender:"male"},
]
function maleNamesFinder(persons){
    const result = persons.filter(person=>person.gender!=='female').map(person=>person.name);
    console.log(result);
}
maleNamesFinder(persons);

/*
2.Task: Object Manipulation
Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
*/
const books = [
    {title:"a",author:'aa',year:2010},
    {title:"b",author:'bb',year:2011},
    {title:"c",author:'cc',year:2012},
    {title:"d",author:'dd',year:2013},
]
function bookTitlesGrnerator(books){
    return books.map(book=>book.title);
}
const booktitles = bookTitlesGrnerator(books);
console.log(booktitles);

/*
3.Task: Function Composition
Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
*/

const makeSquire = (n)=> Math.pow(n,2); // n*n
const makeDouble = (n)=> n+n;
const addFive = (n)=> n+5;
const composeNumber = (n) =>addFive(makeDouble(makeSquire(n)));


/*
4.Task: Sorting Objects

Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
*/
const cars = [
    {model:"b",make:'bb',year:2011},
    {model:"a",make:'aa',year:2010},
    {model:"d",make:'dd',year:2013},
    {model:"c",make:'cc',year:2012},
]

const sortCarByYear = (cars) =>{
    return cars.sort((a,b)=>a.year - b.year)
}
const sortedCars = sortCarByYear(cars)
console.log(sortedCars);

/*
5.Task: Find And Modify

Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.
*/

const ageUpdater = (persons,name) =>{
    const newPersons = [...persons]
    const index = newPersons.findIndex(person=>person.name === name);
    if (index > -1) {
        newPersons[index].age += 2  // increasing 2
    }
    return newPersons;
}
const newPersonList = ageUpdater(persons,'c')
console.log(newPersonList);


/*
Problem Solving:




6.Task: Array Reduction

Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.



7.  Task: Leap Year Checker

Write A Function That Determines Whether A Given Year Is A Leap Year.

Example: Happy New Year



8. Task: Unique Values

Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.

09. Task: Find Maximum Value:

Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.



10.Task: Advanced Sorting

Create An Array Of Objects Representing Students With 'Name' And 'Grades' Properties. Write A Function To Sort The Students By Average Grade In Descending Order.



11. Task: Functional Programming - Reduce

Write A Function That Uses The Reduce Function To Calculate The Total Value Of An Array Of Objects With A 'Quantity' And 'Price' Property.Interview
*/