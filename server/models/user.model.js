import mongoose from "mongoose";

// Declare the Schema of the Mongo model
var UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    friends: {
      type: Array, // Reference
      default: [],
    },

    picturePath: {
      type: String,
      default: "",
      // required:true,
    },
    location: {
      type: String,
    },
    occupation: {
      type: String,
    },
    viewedProfile: {
      type: Number,
    },
    impressions: {
      type: Number,
    },
  },
  { timestamps: true }
);

//Export the model
export const User = mongoose.model("User", UserSchema);
