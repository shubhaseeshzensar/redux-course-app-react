const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// collection and schema
let Course = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    authorId: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  }
 
);

module.exports = mongoose.model("courses", Course);
