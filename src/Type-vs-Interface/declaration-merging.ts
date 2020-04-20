import { printTitle, printVar } from "../helper/printer";


printTitle('Declaration merging')

printTitle('Interface')
interface Person {
    name: string;
}

const firstPerson: Person = { name: 'Chris Tucker'};

printVar('First person', firstPerson)

interface Person {
    age: number;
}

const secondPerson: Person = { name: 'Jackie Chan', age: 66 }

printVar('Second person', secondPerson)



printTitle('Type')

type Student = {
    name: string;
}

const firstStudent: Student = { name: 'Deku' }

printVar('First Student', firstStudent)

type Student = {
    faculty: string;
}
const secondStudent: Student = { name: 'Deku', faculty: 'Computer Science' }

printVar('Second Student', secondStudent)