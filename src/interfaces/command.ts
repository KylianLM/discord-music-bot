import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export interface CommandInterface {
   data: Omit<SlashCommandBuilder, "addSubcommandGroup" | "addSubcommand">
   run: (interaction: ChatInputCommandInteraction) => void
}