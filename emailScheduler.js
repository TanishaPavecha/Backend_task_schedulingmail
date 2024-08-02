const schedule = require('node-schedule');
const { sendEmail } = require('./emailSender');

let scheduledEmails = {};
let nextId = 1;

function scheduleEmail(recipient, subject, body, scheduleTime, recurrence, attachments) {
    const id = nextId++;
    const job = createJob(recipient, subject, body, scheduleTime, recurrence, attachments);
    scheduledEmails[id] = { id, recipient, subject, body, scheduleTime, recurrence, attachments, job };
    return id;
}

function createJob(recipient, subject, body, scheduleTime, recurrence, attachments) {
    return schedule.scheduleJob({ start: new Date(scheduleTime), rule: recurrence }, () => {
        sendEmail(recipient, subject, body, attachments);
    });
}

function getScheduledEmails() {
    return Object.values(scheduledEmails);
}

function getScheduledEmail(id) {
    return scheduledEmails[id];
}

function cancelScheduledEmail(id) {
    const email = scheduledEmails[id];
    if (email) {
        email.job.cancel();
        delete scheduledEmails[id];
        return true;
    }
    return false;
}

module.exports = { scheduleEmail, getScheduledEmails, getScheduledEmail, cancelScheduledEmail };
