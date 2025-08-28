// src/data/db.js
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/swiftQ';

// function connectDB() {
//   mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then(() => console.log('MongoDB connected'))
//     .catch((err) => console.error('MongoDB connection error:', err));
// }




async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/swiftQ")
        // console.log(`mongodb connected:${status.connection.host}`)
        }
        catch(error){
            console.log(error)
        }}

export default connectDB;