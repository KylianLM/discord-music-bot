import {Client, BaseInteraction, CommandInteraction, Events, ChatInputCommandInteraction} from "discord.js";
import {Commands} from "../Commands";

export default (client: Client): void => {
    client.on(Events.InteractionCreate, async (interaction) => {
        if (!interaction.isChatInputCommand()) return;
        await handleSlashCommand(client, interaction);
    });
};

const handleSlashCommand = async (client: Client, interaction: ChatInputCommandInteraction): Promise<void> => {
    const slashCommand = Commands.find(c => c.data.name === interaction.commandName);
    if (!slashCommand) {
        await interaction.followUp({content: "An error has occured."});
        return;
    }

    slashCommand.run(interaction);
};