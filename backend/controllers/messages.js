const { response, request } = require("express");
const Message = require("../models/message");

// POST REQUEST
const postMessages = async (req = request, res = response) => {
  const { name, email, message } = req.body;
  const newMessage = new Message({ name, email, message });

  await newMessage.save();

  res.status(201).json({ newMessage });
};

module.exports = {
  postMessages,
};
