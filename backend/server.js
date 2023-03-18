//Import the required packages
const express = require('express');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Bring in errorHandler
const { errorHandler } = require('./middleware/errorMiddleware')

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
const stockRoutes = require('./routes/stockRoutes');
app.use('/api/stocks', stockRoutes);

//Set the app to use our errorHandler
app.use(errorHandler)

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));