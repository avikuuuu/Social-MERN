const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var friendSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
    index: true,
  },
  firstName: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  location: {
    type: String,
  },
  picturePath: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
  },
});

//Export the model
export const friend = mongoose.model("friend", friendSchema);
