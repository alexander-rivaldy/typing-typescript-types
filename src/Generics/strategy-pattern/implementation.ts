import { BookQuestions, Book,  Novel, MapperStrategy, TypeMapperStrategy, EBook } from './type'
import { titleQuestion, genreQuestion, platformQuestion } from './components'
import React from 'react';

//specific strategy for novel
const novelQuestions: BookQuestions<Novel> = [
    titleQuestion   ,
    genreQuestion
]

const validateNovel = (novel: Novel): boolean => {
    return !!novel.id && !!novel.title && !!novel.author && !!novel.genre;
}

const novelMapperStrategy: MapperStrategy<Novel> = {
    questions: novelQuestions,
    validation: validateNovel
}

//specific strategy for ebook
const ebookQuestions: BookQuestions<EBook> = [
    titleQuestion,
    platformQuestion
]

const validateEBook = (ebook: EBook): boolean => {
    return !!ebook.id && !!ebook.title && !!ebook.author && !!ebook.platform;
}

const ebookMapperStrategy: MapperStrategy<EBook> = {
    questions: ebookQuestions,
    validation: validateEBook
}

// setup strategy pattern mapper
const bookTypeMapperStrategy: TypeMapperStrategy<Book> = {
    novel: novelMapperStrategy,
    ebook: ebookMapperStrategy
}

// usage
const novel: Novel = {
    id: '404',
    type: 'novel',
    title: 'Northern Lights',
    author: 'Phillip Pullman',
    genre: 'Steampunk'
}

const saveToRedux = <T extends Book>(book: T, key: keyof T): void=> {
    dispatch({
        type: UPDATE_SINGLE_FIELD,
        payload: {
            key,
            id: book.id
        }
    })
}

bookTypeMapperStrategy[novel.type].questions.map((question) => {
    React.createElement(question, {
        novel,
        saveToRedux
    })
})