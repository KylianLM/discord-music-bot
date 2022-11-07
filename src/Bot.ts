// DOT ENV
import dotenv from "dotenv"
dotenv.config()

import { Client, GatewayIntentBits, IntentsBitField, REST, Routes } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate"
import { Commands } from "./Commands";
import { env } from "./utils/env";

console.log("Bot is starting...")

//*
const rest = new REST({version: '10'}).setToken(env('BOT_TOKEN'));

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        
        await rest.put(Routes.applicationCommands(env('BOT_APPLICATION_ID')), { body: Commands });

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

client.login(env('BOT_TOKEN'));
