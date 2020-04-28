import React from 'react';

//objects to apply paterns on
export interface Book {
    id: string;
    type: string;
    title: string;
    author: string;
}

export interface Novel extends Book {
    genre: string;
}

export interface EBook extends Book {
    platform: string;
}

//questions for react front end to render
export interface BookQuestionProps<T extends Book> {
    book: T;
    onChangeFunc(book: T, key: keyof T): void;
}

export type BookQuestion<T extends Book> = React.FunctionComponent<BookQuestionProps<any>>
//strategy pattern setup
export interface BookMapperStrategy<T extends Book> {
    questions: BookQuestion<T>[]
    validation(data: T): boolean;
}

export interface BookTypeMapperStrategy {
    [type: string]: BookMapperStrategy<Book>;
}

const smaller: BookMapperStrategy<EBook> = {
    questions: null,
    validation: (data: EBook) => true
}

const testinggg: BookTypeMapperStrategy = {
    a: smaller
}
