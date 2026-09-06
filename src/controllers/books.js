import { getAllBooks } from '../models/books.js';

const getBooksHandler = async (req, res) => {
  try {
    const bookList = await getAllBooks();
    return res.status(200).json(bookList);
  } catch (error) {
    console.error('Error in GET /books:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export { getBooksHandler };