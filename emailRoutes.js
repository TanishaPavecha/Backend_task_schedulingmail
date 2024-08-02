const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');
const validateEmail = require('../middleware/validateEmail');

// POST /api/schedule-email
router.post('/schedule-email', validateEmail, emailController.scheduleEmail);

// GET /api/scheduled-emails
router.get('/scheduled-emails', emailController.getScheduledEmails);

// GET /api/scheduled-emails/:id
router.get('/scheduled-emails/:id', emailController.getScheduledEmail);

// DELETE /api/scheduled-emails/:id
router.delete('/scheduled-emails/:id', emailController.cancelScheduledEmail);

module.exports = router;
