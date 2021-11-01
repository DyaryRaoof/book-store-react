import './BookForm.css';

const BookForm = () => (
  <div className="book-form-wrapper">
    <div>
      <div>Add New Book</div>
      <form className="book-form">
        <input placeholder="Book title" className="book-title" />
        <input placeholder="Book author" />
        <button type="submit">Add Book</button>
      </form>
    </div>

  </div>
);

export default BookForm;
