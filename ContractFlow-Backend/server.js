const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');


// Middlewares
const verifyToken = require('./middleware/verify-token')

// Routes
const authRoutes = require('./controllers/auth.routes')
const contractRoutes = require('./routes/contract.routes')
const managerRoutes = require('./routes/manager.routes')
const companyRoutes = require('./routes/company.routes')



// mongoose
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})


app.use(cors());
app.use(express.json())
app.use(logger('dev'))



app.use('/auth', authRoutes)
app.use('/contracts', verifyToken, contractRoutes)
app.use('/managers', verifyToken, managerRoutes)
app.use('/companies', verifyToken, companyRoutes)

// start the Server
app.listen(3000, () => {
  console.log('The express app is read')
})
