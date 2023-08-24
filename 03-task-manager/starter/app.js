require('dotenv').config(); // 
const connectDb = require('./db/connect');
const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');
const notFound = require('./middlewares/not-found');

app.use(express.json()); // without this, we will not have data in req.body

const logger = (req, res, next) => {
    console.log(`hit server ${req.url}`);
    next();
}
app.use([logger]);

// routes
app.use('/api/v1/tasks', taskRoutes);
app.use(notFound);

// connect db
const PORT = 5000;
const start = async () => {
    try {
        await connectDb(process.env.MONGO_URL);
        app.listen(PORT, console.log(`listening on port ${PORT}`));
    } catch (error) {
        console.log(`[db] err ${error}`);
    }
}
start();