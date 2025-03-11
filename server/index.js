require("dotenv").config();
const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");
const cors = require("cors");
const sendMail = require("./SendMail");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const app = express();





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const botToken = `${process.env.BOT_TOKEN}`;
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
  ],
});

let userProfile = {};
let userStatus = "offline";

client.once("ready", () => {
  console.log("Bot is online!");
  // Fetch your profile information
  client.users.fetch(`${process.env.USER_ID}`).then((user) => {

    userProfile = {
      id: user.id,
      
      username: user.username,
      discriminator: user.discriminator,
      avatar: user.displayAvatarURL(),
      createdAt: user.createdAt,
      globalname: user.tag,

    };
    // console.log(userProfile);
  });
});

client.on("presenceUpdate", (oldPresence, newPresence) => {
  if (newPresence.userId === `${process.env.USER_ID}`) {
    userStatus = newPresence.status;
    // console.log(`Status updated to: ${userStatus}`);
  }
});

client.login(botToken);

app.get("/discordstatus", (req, res) => {
  console.log(req.query);
  res.send("Discord is up and running");
});

app.get("/profile", (req, res) => {
  // Fetch the current presence status each time the profile endpoint is hit
  const guild = client.guilds.cache.first();
  const member = guild.members.cache.get(`${process.env.USER_ID}`);
  if (member) {
    userStatus = member.presence ? member.presence.status : "offline";
  }
  if (Object.keys(userProfile).length === 0) {
    return res.send(
      "Profile information not yet loaded. Please try again in a moment."
    );
  }
  res.json({ ...userProfile, status: userStatus });
});


app.get("/health", (req, res) => {
  res.send("Server is up and running");
})

app.post("/sendmail", (req, res) => {
  console.log(req.body);
  sendMail(req.body);
  res.send("Mail sent");

});

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
