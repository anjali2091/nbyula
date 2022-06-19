

const mongoose = require("mongoose");




const connectDb = async () => {
  try {
    const response = await mongoose.connect("mongodb+srv://anjali2901:anjali1234@cluster0.bpsdr.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
     
      
    });

    console.log(`MongoDb Connected: ${response.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
