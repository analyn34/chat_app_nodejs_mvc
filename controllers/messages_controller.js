const path = require('path');
const Message = require('../models/message')

exports.index = function (req, res) {
  console.log('ow');
  res.sendFile(path.join(__dirname, '../views/messages', 'index.html'));
};

exports.send = function (req, res) {
  var message = new Message(req.body);
  message.save((err) => {
    if (err)
      sendStatus(500)
    res.sendStatus(200);
  })
};