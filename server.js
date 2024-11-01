require('dotenv').config();

const express = require('express');

// Security
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');


const app = express();
const path = require('path');
const { logger, logEvents } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const errorHandlerr = require('./middleware/errorMiddleware');

const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");


const connectDB = require('./config/dbConn');
const mongoose = require('mongoose');
const PORT = process.env.PORT || PORT


// Route Import
const waitlistRoutes = require("./routes/waitlistRoutes");


// Connecting to Database Environments

console.log(process.env.NODE_ENV)

connectDB()

// Middlewares

app.use(logger)

// Cross Origin Resource Sharing
app.use(cors());

app.use(express.json({ limit: "30mb", extended: true}))
app.use(helmet());
app.use(xss());
app.use(cookieParser())
app.use(express.urlencoded({ limit: "30mb", extended: false}))
app.use(bodyParser.json())


// Routes Middleware
app.use("/api/v1", waitlistRoutes);


// Routes

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/root'))
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})
// Error Middleware
app.use(errorHandler)
app.use(errorHandlerr)

// Connect to MongoDB
mongoose.set("strictQuery", true);
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})