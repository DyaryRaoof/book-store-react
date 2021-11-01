import SingleBook from './SingleBook';
import BookForm from './BookForm';

function Books() {
  return (
    <div>
      <SingleBook title="BookTitle" author="Book Author" />
      <SingleBook title="BookTitle" author="Book Author" />
      <SingleBook title="BookTitle" author="Book Author" />
      <BookForm />
    </div>
  );
}

export default Books;
