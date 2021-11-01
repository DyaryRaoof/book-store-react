import './BookForm.css';

const BookForm = () => (
  <div className="book-form-wrapper">
    <div>
      <div>Add New Book</div>
      <form className="book-form">
        <input placeholder="Book title" className="book-title" />
        <select>
          <option value="actual value 1">Display Text 1</option>
          <option value="actual value 2">Display Text 2</option>
          <option value="actual value 3">Display Text 3</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>

  </div>
);

export default BookForm;
