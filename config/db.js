import mongoose from "mongoose";

const connectDB = async () => {
   const conn = await mongoose.connect(
    "mongodb+srv://sarfaraz:SimplySocial!123@cluster0.iorbnal.mongodb.net/e-commerce",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  console.log("Host----", conn.connection.host);
};

export default connectDB;
