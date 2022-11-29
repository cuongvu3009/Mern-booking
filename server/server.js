//	packapge imports
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//	routes imports
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const hotelsRoutes = require('./routes/hotels');
const roomsRoutes = require('./routes/rooms');

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
app.use(cors());

//	routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/hotels', hotelsRoutes);
app.use('/api/v1/rooms', roomsRoutes);

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

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on port ${PORT}`);
});
