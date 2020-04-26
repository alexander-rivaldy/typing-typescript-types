
import React from 'react';

// type Questions<T> = React.FunctionCopmonent<Questions<any>>

// interface QuestionValidationMap<T> {
//     questions: Questions<T>;
//     validation?: (item: T) => boolean;
//     initialize: T;
// }

// interface TypeStrategy {
//     [type: string]: QuestionValidationMap<any>
// }

interface Book {
    title: string;
    author: string;
    pages: number;
}

interface Novel extends Book {
    genre: string;
}

interface QuestionProps<T> {
    book: T;
    saveToRedux(type: string, key: string): void;
}

type Questions<T> = React.FunctionComponent<QuestionProps<T>>[]

interface MapperStrategy<T> {
    questions: Questions<T>
    validation(data: T): boolean;
}

interface TypeMapperStrategy<T> {
    [type: string]: MapperStrategy<T>;
}

const novelQuestions: Questions<Novel> = [
    book
]

const validateNovel = (novel: Novel): boolean => {
    return !!novel.title && !!novel.author && !!novel.pages && !!novel.genre;
}

const NovelMapperStrategy: MapperStrategy<Novel> = {
    questions: [

    ],
    validation: validateNovel
}

const bookTypeMapperStrategy: TypeMapperStrategy<Book> = {
    novel: {
        questions: null,

    }
}


