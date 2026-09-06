import { getDb } from '../db/connect.js';

const getAllBooks = async () => {
  return await getDb().collection('books').find({}).toArray();
};

const getBookById = async (targetId) => {
  return await getDb().collection('books').findOne({ id: targetId });
};

export { getAllBooks, getBookById };