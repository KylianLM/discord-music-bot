import { Client, GatewayIntentBits, IntentsBitField, REST, Routes } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate"
import { Commands } from "./Commands";

console.log("Bot is starting...")

//*
const rest = new REST({version: '10'}).setToken('MTAzODc5NTk3OTMzNzUxNTEzOQ.GfjV71.q4dnUXU7RM4QlfHM72hhL6aiaAyImeIWKKT_E0');

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands('1038795979337515139'), { body: Commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
//*/

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

ready(client);
interactionCreate(client);

client.login('MTAzODc5NTk3OTMzNzUxNTEzOQ.GfjV71.q4dnUXU7RM4QlfHM72hhL6aiaAyImeIWKKT_E0');
