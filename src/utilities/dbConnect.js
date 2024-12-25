import mongoose from 'mongoose'

// Tracking the connection to dataa
let isConnected = false;

export const dbConnect = async ()=>{
    // set dbconnect to true to avoid timeout error
    mongoose.set('strictQuery', true);

    // check if DB is already connected
    if (isConnected) {
        console.log('MongoDB is already Connected')
        return;
    }

    try {
        // establish a connection to mongodb database
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });


        // Database connected
        isConnected = true;
        console.log('MongoDB connected')
        
    } catch (error) {
        console.error('MongoBD connection error:', error)
        
    }





}