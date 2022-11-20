import { ChatInputCommandInteraction, Client, CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Player } from "../classes/Player";
import { CommandInterface } from "src/interfaces/command";

export const Play: CommandInterface = {
    data: new SlashCommandBuilder()
        .setName("play")
        .setDescription("test"),
    run: async (interaction: ChatInputCommandInteraction) => {
        const player = Player.getInstance();
        if (interaction.guild) {
            player.test(interaction.guild);
            interaction.reply('Playing SIUUUU')
        }
    }
}
