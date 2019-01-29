const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('534810294833250304').roles.find("name", "Members").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});




client.login(process.env.BOT_TOKEN);
