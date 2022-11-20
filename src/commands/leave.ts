import { getVoiceConnection } from "@discordjs/voice";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js"
import { CommandInterface } from "src/interfaces/command"

export const Leave: CommandInterface = {
    data: new SlashCommandBuilder()
        .setName("leave")
        .setDescription("Leave the voice channel if the bot is connected."),
    run: async (interaction: ChatInputCommandInteraction) => {
        if (interaction.inGuild()) {
            const connection = getVoiceConnection(interaction.guildId)
            connection?.destroy();
            await interaction.reply("I go home.")
        } else {
            await interaction.reply("I am already at home.")
        }
    }
}
