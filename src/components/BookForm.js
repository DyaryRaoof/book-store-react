import './BookForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducer);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBookToStore = (e) => {
    e.preventDefault();
    const book = {
      id: books.length,
      title,
      author,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="book-form-wrapper">
      <div>
        <div>Add New Book</div>
        <form className="book-form">
          <input
            placeholder="Book title"
            className="book-title"
            onChange={(e) => { setTitle(e.target.value); }}
            value={title}
          />
          <input
            placeholder="Book author"
            onChange={(e) => { setAuthor(e.target.value); }}
            value={author}
          />
          <button type="submit" onClick={(e) => { addBookToStore(e); }}>Add Book</button>
        </form>
      </div>

    </div>
  );
};

export default BookForm;
