import { getAllBooks, getBookById } from '../models/books.js';

const getBooksHandler = async (req, res) => {
  try {
    const bookList = await getAllBooks();
    return res.status(200).json(bookList);
  } catch (error) {
    console.error('Error in GET /books:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getBookByIdHandler = async (req, res) => {
  try {
    const requestedBook = await getBookById(req.params.id);
    
    if (!requestedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    
    return res.status(200).json(requestedBook);
  } catch (error) {
    console.error('Error in GET /books/:id:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export { getBooksHandler, getBookByIdHandler };