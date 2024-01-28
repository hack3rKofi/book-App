import React from 'react';
import BookShow from './BookShow';

function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => (
    <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
  ));
  return (
    <div className="book-list" style={{ height: '500px', overflow: 'auto' }}>
      {renderedBooks}
    </div>
  );
}

export default BookList;
