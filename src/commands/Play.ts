import { Client, CommandInteraction } from "discord.js";
import { Player } from "../classes/Player";
import { Command } from "src/Command";

export const Play: Command = {
    name: "play",
    description: "test",
    run: async (client: Client, interaction: CommandInteraction) => {
        const player = Player.getInstance();
        if (interaction.guild) {
            player.test(interaction.guild);
            interaction.reply('Playing SIUUUU')
        }
    }
}