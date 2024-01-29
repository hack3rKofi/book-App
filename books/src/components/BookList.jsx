import React, { useContext } from 'react';
import BookShow from './BookShow';
import BooksContext from '../context/App-context';

function BookList() {
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));
  return (
    <div className="book-list" style={{ height: '500px', overflow: 'auto' }}>
      {renderedBooks}
    </div>
  );
}

export default BookList;
