
import React from 'react';
import { Book, BookQuestionProps, Novel, EBook } from './type';


export const titleQuestion: React.FunctionComponent<BookQuestionProps<Book>> = ({
    book,
    saveToRedux
}: BookQuestionProps<Book>) => {
    return <input type="text" value={book.title} onChange={() => saveToRedux(book, "title")}/>
}

export const genreQuestion: React.FunctionComponent<BookQuestionProps<Novel>> = ({
    book,
    saveToRedux
}: BookQuestionProps<Novel>) => {
    return <input type="text" value={book.genre} onChange={() => saveToRedux(book, "genre")}/>
}

export const platformQuestion: React.FunctionComponent<BookQuestionProps<EBook>> = ({
    book,
    saveToRedux
}: BookQuestionProps<EBook>) => {
    return <input type="text" value={book.platform} onChange={() => saveToRedux(book, "platform")}/>
}