import './SingleBook.css';

const SingleBook = () => (
  <div className="single-book-wrapper">
    <div>
      <div className="book-info">
        <span>genere</span>
        <span>Writer</span>
        <span>Title</span>
      </div>
      <div className="book-buttons">
        <button type="button">Comment</button>
        <button type="button">Remove</button>
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

export default SingleBook;
