import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(' MongoDB connected');
  } catch (error) {
    console.error(' MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
// This code connects to a MongoDB database using Mongoose.
// It exports a function that can be called to establish the connection.
// If the connection fails, it logs an error message and exits the process.