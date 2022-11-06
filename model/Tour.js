const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Tour name is Required..!"],
      trim: true,
      unique: [true, "Name must be unique"],
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [30, "Name is too large, set a name under 30 characters."],
    },

    description: {
      type: String,
      minLength: [10, "Please Describe about the Tour"],
      required: [true, "Tour Description is Required..!"],
      trim: true,
    },

    // image: {
    //   required: [true, "Tour Image is Required..!"],
    // },

    price: {
      type: Number,
      required: [true, "Tour Price is Required..!"],
      trim: true,
    },

    destination: {
      type: String,
      required: [true, "Tour Destination is Required..!"],
      minLength: [3, "Enter a valid Destination..!"],
      trim: true,
    },

    travelDate: {
      type: Date,
      required: [true, "Must need a Travel Date..!"],
      match: [
        /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
        "Must be follow this pattern: YYYY-MM-DD",
      ],
    },

    // agency: {
    //   type: mongoose.Schema.type.ObjectId,
    //   ref: "Agency",
    // },

    views: {
      type: Number,
      enum: [0],
      default: 0,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour