const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  discount: {
    type: Number,
    dafault: 0,
  },
  bgcolor: String,
  panelcolor: String,
  textcolor: String,
});

const productModel = mongoose.model("product", productSchema);

module.exports  =productModel;
