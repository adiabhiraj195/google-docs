import transporter from "../config/mail.config.js";

class MailService {
    sendEmail = async (mailOption) => {
        await transporter.sendMail(mailOption)
    }
}
const mailService = new MailService();

export default mailService;