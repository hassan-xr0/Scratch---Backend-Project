const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  picture: String,
  gstin: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports  =userModel;
