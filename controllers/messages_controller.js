const path = require('path');
const Message = require('../models/message')

exports.index = function (req, res) {
  res.sendFile(path.join(__dirname, '../views/messages', 'index.html'));
};

exports.send = function (req, res) {
  var message = new Message(req.body);
  message.save((err) => {
    if (err)
      sendStatus(500)
      global.io.emit('message', req.body);
    res.sendStatus(200);
  })
};

exports.retrieve = function (req, res) {
  Message.find({}, (err, messages) => {
    res.send(messages);
  });
};