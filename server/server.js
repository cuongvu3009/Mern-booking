//	packapge imports
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

//	routes imports
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');

const app = express();
dotenv.config();

//	database
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to mongoDB.');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!');
});

//	middlewares
app.use(express.json());
app.use(cookieParser());

//	routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', usersRoutes);

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

connectDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
