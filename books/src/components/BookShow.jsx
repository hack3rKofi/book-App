import React, { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/App-context';

function BookShow({ book }) {
  const { deleteBookById } = useContext(BooksContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleClick = () => {
    deleteBookById(book.id);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  const handleEditClick = () => {
    console.log('edit object: ', book.id);
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/300/200`} alt="books" />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
