
import {printTitle, printVar} from '../../helper/printer'

//
printTitle('Indexable Array')

interface IndexableArray {
    [key: number]: string;
}

const IndexableArray: IndexableArray = ['', ''];
printVar('Indexable array', IndexableArray)   

//
printTitle('Fancy Indexable Array')

interface FancyIndexableArray {
    [key: number]: string;
    length: number;
    pop(): string;
    push(string: string): number;
}
const fancyIndexableArray: FancyIndexableArray = ['first', 'second'];


printVar('Fancy Indexable Array', fancyIndexableArray)
printVar('Fancy Indexable Array length', fancyIndexableArray.length)

printVar('Pop out FIA', fancyIndexableArray.pop())

printVar('Fancy Indexable Array', fancyIndexableArray)
printVar('Fancy Indexable Array length', fancyIndexableArray.length)

printVar('Push into FIA', fancyIndexableArray.push('third'))

printVar('Fancy Indexable Array', fancyIndexableArray)
printVar('Fancy Indexable Array length', fancyIndexableArray.length)
