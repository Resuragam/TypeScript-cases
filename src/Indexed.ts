type Person = {
    name: string
    age: number
}
type Age = Person['age']
// type Age = number

type T1Person = Person['age' | 'name']
type T2Person = Person[keyof Person]
type PersonKey = 'age' | 'name'
type T3Person = Person[PersonKey]

type ErrorPerson = Person['son']

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
  ];

type MyArrayT = typeof MyArray[number];
// type MyArrayT = {
//     name: string;
//     age: number;
// }

type Age1 = typeof MyArray[number]["age"];
// type Age = number
       
