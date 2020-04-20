import { printTitle, printVar } from "../helper/printer";

printTitle('Computed property')

type PersonKeys = 'name' | 'phone' | 'address';

type IndexableObject_Type = {
    [key in PersonKeys]: string
}

const person_type: IndexableObject_Type = {
    name: 'Felix Kjellberg',
    phone: '0123456789',
    address: '1 Youtube Land'
}

printVar('Indexable Object TYPE with computed property', person_type);

interface IndexableObject_Interface {
    [key in PersonKeys]: string;
}

const person_interface: IndexableObject_Interface = {
    name: '',
    phone: '',
    address: ''
}

printVar('Indexable Object TYPE with computed property', person_interface);