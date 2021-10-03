const { Schema, model } = require("mongoose");

const MessageSchema = Schema({
  name: {
    type: "String",
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  message: {
    type: "String",
    required: [true, "message is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

MessageSchema.methods.toJSON = function () {
  const { _id, __v, ...message } = this.toObject();
  message.uid = _id;
  return message;
};

module.exports = model("Message", MessageSchema);
