import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { CommandInterface } from "src/interfaces/command";

export const Ping: CommandInterface = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    run: async (interaction: ChatInputCommandInteraction) => {
        await interaction.reply("Pong!")

    }
}