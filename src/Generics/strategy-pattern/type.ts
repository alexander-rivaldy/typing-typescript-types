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
export interface BookQuestionProps<T> {
    book: T;
    onChangeFunc(book: T, key: keyof T): void;
}


//strategy pattern setup
export interface BookMapperStrategy<T> {
    questions: React.FunctionComponent<BookQuestionProps<Book>>[]
    validation(data: T): boolean;
}

export interface BookTypeMapperStrategy<T> {
    [type: string]: BookMapperStrategy<T>;
}

