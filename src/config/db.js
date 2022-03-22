const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://masai:masai@clustermasai.ri0u6.mongodb.net/librarydb?retryWrites=true&w=majority"
  );
};

module.exports = connect;
