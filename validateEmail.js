const validateEmail = (req, res, next) => {
    const { recipient, subject, body, scheduleTime, recurrence } = req.body;
    if (!recipient || !subject || !body || !scheduleTime) {
        return res.status(400).json({ message: 'Recipient, subject, body, and scheduleTime are required' });
    }

    // Add more validations if needed
    next();
};

module.exports = validateEmail;
