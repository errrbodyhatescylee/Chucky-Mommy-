//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/8oq043.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27693798048";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/dsg12l.jpg";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURHa2NWYlRaeGU2akx0Z1RNVTRESFlOSjFsWWF2d2dRdDdpZW5wQWxHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFZsaTJSaXlWWm1SVnl5cTVaa0pvZ0c2Mm4zVks5RE5yOHcycTUwZS9IRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQVlHZ05sYWNDaGowRUEwSEJZd0ZreVhpVEszc0lGclNMQjhiSFJtTG13PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGYzVwbThzeCtvOUl0MVk3dGl2TnRFWlVpTEJMVzRwWFlWMys3bWRORW53PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitMOUxCZWZRKzhNdzVzc0xVdGpLVjVCckE5bzhRUkdmTDRSdFhDQ1BTRk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRFcGZVT2djdXYwRlBTM1o1U05GYy9EVTl2N3BKbmRKTjlwRUxSYSt4bG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdHQittb3NZbUw5VmRtLzgxeFFvdGdmVnpZamVZaFhyQ1IxRTExNHoxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXphblJBb25KaVhRUTN3WjdhUTJEa0JVVXZPTVFxbm1Ec1NpQ1o1QjZRdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV3T0RRSzBadjlpaldWSmNWYnY4ajFwRzBiVUhhdVR1bjYyOVQvdndwK0pWa05DSmhPQndNZTVXRldwSGFCZVpJK3NuNGh1Z3Qwd1NvSU5uY2h5MGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiUnZxektHVXNJUG8xdGkrTy9VMDlRYmJ0MU9UR3ZHSyt5ekR4YWtrVkFhWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMFM1VWpmYnJTZWVnbXpKSXlPZF9RZyIsInBob25lSWQiOiJlMWVmNDY1Ny1kNWMzLTRmMzUtYWUxOS0wODQ3N2RkMTgxMjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1FZYzBCbG1KN1JOU2ZIWDZ2Z1hXTkZ6WGlnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF1WVhGc1VpRlRtSVFrU1FTaHprUjM1eDMzYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJMQVJSNlhDWiIsIm1lIjp7ImlkIjoiMjc2OTM3OTgwNDg6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiY2jMtnVja3nMtuC4hV7igKLvu4zigKJe4LiFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLM3ZxcWdHRUt6TG1ia0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5dE1kckdTbTA1T2JkSXlkMkdNNHVLb00vUnRrbGRVeGxxQTEwWjJuNWk4PSIsImFjY291bnRTaWduYXR1cmUiOiJnWi9WR2VJWi9LS0F6Qm1SSDJ1N1hMdkxnbUlKMDBFR0ljWXZDNUUzQ3dDaU0rV1BCUkdkcExUbGEzUEhkdmtDYU1QYU5CYXQ2dVJaNFI3dXlOMThDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidnB6MWVqS1piNDRVRUE5RXZZclFPZnQwaVhMcmdGSmRmU3c1WlVvMjg0Nzc0N3FWODRmNjVGeGJDVmZTUzFzQis3ZnJxOVh5WGpDRHp4NlZ5TmpVZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzY5Mzc5ODA0ODoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmYlRIYXhrcHRPVG0zU01uZGhqT0xpcURQMGJaSlhWTVphZ05kR2RwK1l2In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNTY5NjU3fQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`theCyleeBot❤️🧸™`",
  author: process.env.PACK_AUTHER || "chucky",
  packname: process.env.PACK_NAME || "Sir Cylee ❤️🧸",
  botname: process.env.BOT_NAME || "Chucky 2.0",
  ownername: process.env.OWNER_NAME || "Chucky 🪐💫",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
