import React from 'react';

//obejcts to apply paterns on
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
export type BookQuestions<T> = React.ComponentType<BookQuestionProps<T>>[]

export interface BookQuestionProps<T> {
    book: T;
    saveToRedux(book: T, key: keyof T): void;
}


//strategy pattern setup
export interface MapperStrategy<T> {
    questions: BookQuestions<T>
    validation(data: T): boolean;
}

export interface TypeMapperStrategy<T> {
    [type: string]: MapperStrategy<T>;
}

