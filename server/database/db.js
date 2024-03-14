import mongoose from "mongoose";

// connecting to db

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-12iurlp-shard-00-00.exprbfr.mongodb.net:27017,ac-12iurlp-shard-00-01.exprbfr.mongodb.net:27017,ac-12iurlp-shard-00-02.exprbfr.mongodb.net:27017/?ssl=true&replicaSet=atlas-7beq10-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0tachblogs`;
  try {
    // promise
    await mongoose.connect(URL);
    console.log("database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
