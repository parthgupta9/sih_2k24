const mongoose = require('mongoose');

const databaseConnection = () => {
    mongoose.connect(
        process.env.DB || 'mongodb+srv://parth:qzit5532@projectsnodeexpress.nfogjjc.mongodb.net/?retryWrites=true&w=majority&appName=ProjectsNodeExpress',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then((data) => {
        console.log(`Database connected successfully at server ${data.connection.host}`);
    }).catch((error) => {
        console.error('Database connection error:', error);
        process.exit(1); // Optional: exit process if the connection fails
    });
};

module.exports = databaseConnection;
