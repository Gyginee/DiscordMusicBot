module.exports = {
  Admins: ["317244850426740736"], //Admins of the bot
  ExpressServer: false, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "kd", //Default prefix, Server Admins can change the prefix
  Port: 3001, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/qdV2gVhmmg", //Support Server Link
  Token: process.env.Token || "OTEyNzE4MjQ0MjExNzUyOTkx.YZ0BGg.qsGUklU0k0OnL_D2TtIuW8OfUxs", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "912718244211752991", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "go4mN56JAgbJ46TW5XEiWS9kMpdkvqyN", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  timeout: 1800000,
  CookieSecret: "Gyginee is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "http://gyginee.com", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "with cuteness", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "14648",
    host: "103.171.0.154",
    port: 2333, // The port that lavalink is listening to. This must be a number!
    pass: "youshallnotpass",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "ff598bdbb4864fbca35b6be2916c2590", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "77add901a2174342b3396f5b349c19a0", //Spotify Client Secret
  },
};
