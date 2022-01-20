const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    unique:true,

    required: [true, "Please Enter Your name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  
  role: {
    type: String,
    required: [true, "Please Enter Your role"],
    minLength: [4, "Message should be greater than 4 characters"],
  },
  experience: {
    type: Number,
    unique:true,

    required: [true, "Please Enter Your experience"],
    minLength: [1, "cannot be empty"],
  },
  
  createdAt: {
    type: Date,
    default: new Date(),
  },

});


module.exports = mongoose.model("Employee", employeeSchema);
