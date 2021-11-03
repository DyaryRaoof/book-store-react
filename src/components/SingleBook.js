import './SingleBook.css';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookOnServer } from '../api';

const SingleBook = ({ title, category, id }) => {
  const dispatch = useDispatch();

  return (

    <div className="single-book-wrapper">
      <div>
        <div className="book-info">
          <span>{category}</span>
          <span>{title}</span>
          <span>{}</span>
        </div>
        <div className="book-buttons">
          <button type="button">Comment</button>
          <button type="button" onClick={() => { deleteBookOnServer(dispatch, id); }}>Remove</button>
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
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default SingleBook;
