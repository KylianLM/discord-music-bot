import { getVoiceConnection } from "@discordjs/voice";
import { Client, CommandInteraction } from "discord.js";
import { Command } from "src/Command";

export const Leave: Command = {
    name: "leave",
    description: "Leave the voice channel if the bot is connected",
    run: async (client: Client, interaction: CommandInteraction) => {
        if(interaction.inGuild()) {
            const connection = getVoiceConnection(interaction.guildId)
            connection?.destroy();
            await interaction.reply("I go home.")
        } else {
            await interaction.reply("I am already at home.")
        }
    }
}