import { printTitle, printVar } from "../../helper/printer";

printTitle('Read Only')

interface IndexableObject {
    readonly [key: string]: string
}

const indexableObject: IndexableObject = { typescript: 'is', so: 'amazing' };

printVar('Indexable Object', indexableObject);
printVar('Indexable Object with key `so`', indexableObject.so);

// This is not allowed!
indexableObject['javascript'] = 'is so-so';

