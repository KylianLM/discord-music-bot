import {Client, CommandInteraction} from "discord.js";
import {Command} from "../Command";

export const Ping: Command = {
    name: "ping",
    description: "Replies with Pong!",
    run: async(client: Client, interaction: CommandInteraction) => {
        await interaction.reply("Pong!")
    }
}