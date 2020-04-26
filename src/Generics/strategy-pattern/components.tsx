
import React from 'react';
import { Book, BookQuestionProps, Novel, EBook } from './type';


export const titleQuestion: React.FunctionComponent<BookQuestionProps<Book>> = ({
    book,
    onChangeFunc
}: BookQuestionProps<Book>) => {
    return <input type="text" value={book.title} onChange={() => onChangeFunc(book, "title")}/>
}

export const genreQuestion: React.FunctionComponent<BookQuestionProps<Novel>> = ({
    book,
    onChangeFunc
}: BookQuestionProps<Novel>) => {
    return <input type="text" value={book.genre} onChange={() => onChangeFunc(book, "genre")}/>
}

export const platformQuestion: React.FunctionComponent<BookQuestionProps<EBook>> = ({
    book,
    onChangeFunc
}: BookQuestionProps<EBook>) => {
    return <input type="text" value={book.platform} onChange={() => onChangeFunc(book, "platform")}/>
}