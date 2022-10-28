import mongoose from "mongoose";

const connectDB = async () => {
   const conn = await mongoose.connect(
    process.env.LOCAL_DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  
  console.log("Host----", conn.connection.host);
};

export default connectDB;
