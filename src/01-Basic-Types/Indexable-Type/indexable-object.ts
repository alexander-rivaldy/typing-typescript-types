import { printTitle, printVar } from "../../helper/printer";

printTitle('Indexable Object')

interface IndexableObject {
    [key: string]: string
}

const indexableObject: IndexableObject = { typescript: 'is', so: 'amazing' };

printVar('Indexable Object', indexableObject);


interface FancyIndexableObject {
    [key: string]: string;
    mandatoryKey: string;
    // notAllowed: number;
}

// BELOW will say `Property 'mandatoryKey' is missing in type '{ addedKey: string; }' but required in type 'FancyIndexableObject'.`
// const fancyIndexableObject: FancyIndexableObject = { addedKey: 'string'}

const fancyIndexableObject: FancyIndexableObject = { addedKey: 'this is so cool', mandatoryKey: 'another' }

printVar('Fancy Indexable Object', fancyIndexableObject)

printVar('Using it as dictionary, grabbing `addedKey`', fancyIndexableObject.addedKey)


