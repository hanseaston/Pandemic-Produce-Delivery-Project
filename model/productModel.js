/**
 * This model class stores information about a single product in the shop
 * @module models/product.js
 */

/** Imports */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/** Schema */
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

/* Exporting the product model with its schema */
module.exports = mongoose.model("Product", productSchema);
