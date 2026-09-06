import express from 'express';

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Basic root route
app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Server is running' });
});

export default app;