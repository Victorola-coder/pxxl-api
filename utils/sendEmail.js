const nodemailer = require('nodemailer');

class EmailService {
    constructor(options) {
        this.transporter = nodemailer.createTransport(options);
    }

    async sendMail(mailOptions) {
        await this.transporter.sendMail(mailOptions);
    }
}

const getEmailService = () => {
    const emailProviders = {
        gmail: () => {
            const username = process.env.GMAIL_USERNAME;
            const password = process.env.GMAIL_PASSWORD;
            if (!username || !password) {
                throw new Error('Gmail username or password not defined');
            }
            return new EmailService({
                service: 'gmail',
                auth: {
                    user: username,
                    pass: password,
                    secure: true,
                },
            })
        },
        mailtrap: () => {
            const username = process.env.MAILTRAP_USERNAME;
            const password = process.env.MAILTRAP_PASSWORD;
            if (!username || !password) {
                throw new Error('Mailtrap username or password not defined');
            }
            return new EmailService({
                host: process.env.MAILTRAP_HOST,
                port: 465,
                auth: {
                    user: username,
                    pass: password,
                },
            });
        },        
    };

    const defaultEmailProvider =
        process.env.DEFAULT_EMAIL_PROVIDER?.toLowerCase() || 'mailtrap';

    if (!emailProviders[defaultEmailProvider]) { 
        throw new Error(
            `Invalid email provider '${defaultEmailProvider}'. Supported providers are ${Object.keys(
                emailProviders
            ).join(', ')}`
        );
    }

    return emailProviders[defaultEmailProvider]();
};


const sendEmail = async (to, subject, html) => {
    const emailService = getEmailService();

    const mailOptions = {
        from: process.env.EMAIL_SENDER,
        to: Array.isArray(to) ? to.join(',') : to,
        subject: subject,
        html: html,
    };

    await emailService.sendMail(mailOptions);
};

module.exports = sendEmail;
