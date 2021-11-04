import './SingleBook.css';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookOnServer } from '../api';
import progressImg from '../images/progress.png';

const SingleBook = ({ title, category, id }) => {
  const dispatch = useDispatch();

  return (

    <div className="single-book-wrapper">
      <div>
        <div className="book-info">
          <span className="category">{category}</span>
          <span className="title">{title}</span>
          <span className="author">Author Name</span>
        </div>
        <div className="book-buttons">
          <button type="button">Comment</button>
          <span className="between-span">|</span>
          <button type="button" onClick={() => { deleteBookOnServer(dispatch, id); }}>Remove</button>
          <span>|</span>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress-div">
        <img src={progressImg} alt="progress" />
        <div>
          <span className="progress-percentage">64%</span>
          <br />
          <span className="completed">Completed</span>
        </div>

      </div>
      <div className="book-chapter-info">
        <span className="current-chapter">CURRENT CHAPTER</span>
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
