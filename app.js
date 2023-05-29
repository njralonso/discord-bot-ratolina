// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, ActivityType } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("ready", () => {
  client.user.setStatus("online");
  client.user.setActivity("Mickey Mouse 📺", { type: ActivityType.Watching });
});

// Log in to Discord with your client's token
client.login(token);
