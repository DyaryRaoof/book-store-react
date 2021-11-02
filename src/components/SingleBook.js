import './SingleBook.css';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const SingleBook = ({ title, author, id }) => {
  const dispatch = useDispatch();

  return (

    <div className="single-book-wrapper">
      <div>
        <div className="book-info">
          <span>genere</span>
          <span>{title}</span>
          <span>{author}</span>
        </div>
        <div className="book-buttons">
          <button type="button">Comment</button>
          <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        64%
        <br />
        Completed
      </div>
      <div className="book-chapter-info">
        <span>Current Chapter</span>
        <span>Chapter No X.</span>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};

SingleBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default SingleBook;
