const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const app = express();
dotenv.config();

//	routes
app.get('/', (req, res) => {
  res.send('Hello World from be');
});

//	error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!';
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const connectDB = async () => {
  mongoose.connect(process.env.MONGO_URI);
  console.log('DB is connected!');
};

connectDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
