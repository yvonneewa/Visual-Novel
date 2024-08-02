const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tech-friends');
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/programming-thoughts');
>>>>>>> origin/main

module.exports = mongoose.connection;
