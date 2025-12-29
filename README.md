# Blog task
1. What are some differences between interfaces and types in TypeScript?

    answer: 

    1.একটি interface একাধিক বার declare করলে যদি তা একই নামের হয় তাহলে সেটা merge হয়ে যায়।

    example:
    ```ts
    interface User{
        name: string;
    }

    interface User{
        age: number;
    }
    //the resulting user has both properties
    const person: User = {
        name: string;
        age: number;
    }
    ```
    কিন্তু type একাধিক বার লিখলে সেটা merge হয়না সেক্ষেত্রে compilation error হয়।

    example:

    ```ts
    type Vehicle = {
        brand: string;
    }
    //shows error Duplicate identifier 'Vehicle'
    type Vehicle = {
        wheels: number;
    }

    ```

    2.Interface এ কোন object কে extend করতে হলে "extends" keyword ব্যবহার করতে হয়। 

    example:

    ```ts
    interface Animal{
        name: string;
    }

    interface Dog extends Animal{
        breed: string;
    }

    const mypet: Dog = {
        name: "Dogesh";
        breed: "Golden Retriever";
    }

    ```


    type Alias এ object extend তখনি করা যায় যখন দুই বার তার অধিক type intersect(&) করে।

    example:

    ```ts
    type Animal = {
        name: string;
    }

    type Dog = Animal & {
        breed: string;
    }

    const mypet: Dog = {
        name: "Dogesh";
        breed: "Golden Retriever";
    }
    ```
    3.interface এ type alias এর মত Union ব্যবহার করা যায় না। 

    example:

    ```ts

    type WindowState = "open"|"closed"|"minimized";

    ```
    এটা interface এ করা সম্ভব নয় তাই যখন Union define করা লাগে তখন type alias ব্যবহার করতে হয়। 

2.Explain the difference between any, unknown, and never types in TypeScript.

answer:

any: যেকোন value assign করা যায়, কখনও বাঁধা দেয় না।

**example:**

```ts

let value: any;

value = 50;
value = "Jimmy";
value = true;

value.toUpperCase() //no error

```
সাধারণত এটা ব্যবহার থেকে বিরত থাকা উচিত কারন একদমই সেইফ না।

unknown: এটি সেইফ। API/User input  থেকে data আসার সময় এটি ব্যবহার করা হয়। তবে value assign এর আগে অবশ্যই typeof/instanceof দিয়ে চেক করে নিতে হবে। 

```ts
let value: unknown = "Jimmy";

if(typeof value === "string"){
    console.log(value.toUpperCase()); // safe
}
```
Never: সাধারণত এটি ব্যবহার হয় infinite loop এ কিংবা যে ফাংশন error throw করে।

example: 

```ts
//example 1
function throwError(message: string): never{
    throw new Error(message);
}

//example 2
function neverEndingLoop(): never{
    while(true){}
}
```




