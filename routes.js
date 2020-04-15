const express = require('express');
const router = express.Router();

const messages_controller = require('./controllers/messages_controller');

router.get('/', messages_controller.index);
router.post('/send', messages_controller.send);

module.exports = router;