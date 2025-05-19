const mongoose = require("mongoose");

const uri = 'mongodb+srv://kirosino02:123456789_123456789@cluster0.kspy7om.mongodb.net/ANU_Hotel?retryWrites=true&w=majority';

mongoose.connect(uri); // استخدم uri بدلاً من mongoURL

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection failed:', error);
});

db.once('open', () => {
  console.log('MongoDB connected successfully');
});

module.exports = mongoose;
