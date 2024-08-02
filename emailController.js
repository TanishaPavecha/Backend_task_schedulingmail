const emailScheduler = require('../services/emailScheduler');

const scheduleEmail = (req, res) => {
    const { recipient, subject, body, scheduleTime, recurrence, attachments } = req.body;
    const id = emailScheduler.scheduleEmail(recipient, subject, body, scheduleTime, recurrence, attachments);
    res.status(201).json({ id });
};

const getScheduledEmails = (req, res) => {
    const scheduledEmails = emailScheduler.getScheduledEmails();
    res.json(scheduledEmails);
};

const getScheduledEmail = (req, res) => {
    const id = req.params.id;
    const email = emailScheduler.getScheduledEmail(id);
    if (email) {
        res.json(email);
    } else {
        res.status(404).json({ message: 'Email not found' });
    }
};

const cancelScheduledEmail = (req, res) => {
    const id = req.params.id;
    const success = emailScheduler.cancelScheduledEmail(id);
    if (success) {
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Email not found' });
    }
};

module.exports = { scheduleEmail, getScheduledEmails, getScheduledEmail, cancelScheduledEmail };
