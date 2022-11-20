// DOT ENV
import dotenv from "dotenv"
dotenv.config()

import { Client, GatewayIntentBits, IntentsBitField, REST, Routes, SlashCommandBuilder } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate"
import { env } from "./utils/env";
import { Commands } from "./Commands";
import Redis from "./classes/Redis";

console.log("Bot is starting...")

//*
const commandList : Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">[] = []
for (const command of Commands) {
    commandList.push(command.data)
}

const rest = new REST({ version: '10' }).setToken(env('BOT_TOKEN'));

(async () => {
    try {
        console.log(`Started refreshing ${commandList.length} application (/) commands.`);

        await rest.put(Routes.applicationCommands(env('BOT_APPLICATION_ID')), { body: commandList});

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


// REDIS TEST

let redis = new Redis();
