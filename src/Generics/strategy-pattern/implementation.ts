import { Book,  Novel, BookMapperStrategy, BookTypeMapperStrategy, EBook, BookQuestionProps, BookQuestion } from './type'
import { titleQuestion, genreQuestion, platformQuestion } from './components'
import React from 'react';


const validateCommonBookInfo = (book: Book): boolean =>
    !!novel.id && !!novel.title && !!novel.author

//specific strategy for novel
const novelQuestions: BookQuestion<Novel>[] = [
    titleQuestion,
    genreQuestion
]

const validateNovel = (novel: Novel): boolean => {
    return validateCommonBookInfo(novel) && !!novel.genre;
}

const novelMapperStrategy: BookMapperStrategy<Novel> = {
    questions: novelQuestions,
    validation: validateNovel
}

//specific strategy for ebook
const ebookQuestions: BookQuestion<EBook>[] = [
    titleQuestion,
    platformQuestion
]

const validateEBook = (ebook: EBook): boolean => {
    return validateCommonBookInfo(novel) && !!ebook.platform;
}

const ebookMapperStrategy: BookMapperStrategy<EBook> = {
    questions: ebookQuestions,
    validation: validateEBook
}

// setup strategy pattern mapper
const bookTypeMapperStrategy: BookTypeMapperStrategy = {
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


const onChangeFunc = <T extends Book>(book: T, key: keyof T): void=> {
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
        book: novel,
        onChangeFunc
    })
})