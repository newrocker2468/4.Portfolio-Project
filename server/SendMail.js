const nodemailer = require("nodemailer");

const sendMail = async (formData) => {
  // Replace with your SMTP service credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: "corenexui9@gmail.com",
    pass: `${process.env.EMAIL_PASSWORD}`,
  },
});


  const mailOptions = {
    from: "jknewro91@gmail.com",
    to: "hello@jaskaran.dev",
    subject: formData.subject,
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    html: `<p><strong>Name:</strong> ${formData.name}</p>
           <p><strong>Email:</strong> ${formData.email}</p>
           <p><strong>Message:</strong> ${formData.message}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
};

module.exports = sendMail;
