import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import Redis from "../classes/Redis";
import { CommandInterface } from "../interfaces/command";

export const Clear: CommandInterface = {
    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Adds music to the queue."),
    run: async (interaction: ChatInputCommandInteraction) => {
        let redis = new Redis();
        const result = await redis.clear()
        interaction.reply('Cleared entire queue!');
    }
}