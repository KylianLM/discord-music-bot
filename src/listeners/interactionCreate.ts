import {Client, BaseInteraction, CommandInteraction} from "discord.js";
import {Commands} from "../Commands";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isChatInputCommand()) return;
        await handleSlashCommand(client, interaction);
    });
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    const slashCommand = Commands.find(c => c.name === interaction.commandName);
    if (!slashCommand) {
        await interaction.followUp({content: "An error has occured."});
        return;
    }

    await slashCommand.run(client, interaction);
};