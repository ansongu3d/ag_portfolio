const express = require("express");
const router = express.Router();
const cors = require("cors");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const nodemailer = require("nodemailer");
require('dotenv').config();

// server used to send send emails
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("./build"));

const oauth2Client = new OAuth2(
  process.env.ag_clientId,
  process.env.ag_clientSecret,
  // "982699884207-vqh01l77kfh4lhobq2ifv8kcirfobhj7.apps.googleusercontent.com", // ClientID
  // "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", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.ag_refreshToken
});
const accessToken = oauth2Client.getAccessToken()

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "agdevsyd@gmail.com", 
    clientId: process.env.ag_clientId,
    clientSecret: process.env.ag_clientSecret,
    refreshToken: process.env.ag_refreshToken,
    accessToken: accessToken
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "agdevsyd@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});


app.get("*", (req, res) => {
  res.setHeader("content-type", "text/html");
  fs.createReadStream(`${__dirname}/build/index.html`).pipe(res);
});

app.listen(port, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);