import { useSelector } from 'react-redux';
import SingleBook from './SingleBook';
import BookForm from './BookForm';

function Books() {
  const books = useSelector((state) => state.bookReducer);

  return (
    <div>
      { books
        .map((book) => (
          <SingleBook
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
      <BookForm />
    </div>
  );
}

export default Books;
