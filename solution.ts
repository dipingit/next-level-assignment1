 function formatValue(value: any) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    if (typeof value === 'number') {
        return value * 10;
    }
    if (typeof value === 'boolean') {
        return !value;
    }
}

function getLength(value: string | any[]){

    if(typeof value === 'string'){
        return value.length;
    }
    else if(Array.isArray(value)){
        return value.length;
    }
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `name: ${this.name}, Age: ${this.age}`;
    }
}

function filterByRating(books: {title: String, rating: number}[]){
    return books.filter(book => book.rating >= 4);
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

function filterActiveUsers(users: {id:number, name: string, email: string, isActive: boolean}[]){
    return users.filter(user => user.isActive);
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

interface Book{
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}
function printBookDetails(book: Book): string {
    const availability = book.isAvailable ? 'Yes' : 'No';
    return `Title: ${book.title}, Author: ${book.author}, Published Year: ${book.publishedYear}, Available: ${availability}`;
}


const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

printBookDetails(myBook);


function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[]{
    const result:(string | number)[] = [];

    function exists(value: string | number, arr: (string | number)[]): boolean{
        for(let i=0; i<arr.length; i++){
            if(arr[i]===value){
                return true;
            }
        }
        return false;
    }
    for(let i=0; i<arr1.length; i++){
        if(!exists(arr1[i], result)){
            result[result.length] = arr1[i];
        }
    }
    for(let i=0; i<arr2.length; i++){
        if(!exists(arr2[i], result)){
            result[result.length] = arr2[i];
        }
    }
    return result;

}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

interface Product{
    name: string,
    price: number,
    quantity: number,
    discount?: number
}

function calculateTotalPrice(products: Product[]): number {

    return products.reduce((acc, product) => {
        const baseTotal = product.price * product.quantity;
        const discountAmount = product.discount ? (baseTotal * product.discount) / 100 : 0;
        const finalPrice = baseTotal - discountAmount;

        return acc + finalPrice;
    }, 0)
    
}
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];


     



