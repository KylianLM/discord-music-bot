import { Client, CommandInteraction } from "discord.js";
import { Command } from "../Command";
import { joinVoiceChannel } from "@discordjs/voice";

export const Join: Command = {
    name: "join",
    description: "Join the current user's channel.",
    run: async (client: Client, interaction: CommandInteraction) => {
        let channelNotFound = true;
        interaction.guild?.channels.fetch().then(channels => {
            channels.forEach(channel => {
                if (channel?.type === 2) {
                    channel.members.each(member => {
                        if (member.user.id === interaction.user.id) {
                            channelNotFound = false;
                            const connection = joinVoiceChannel({
                                channelId: channel.id,
                                guildId: channel.guild.id,
                                adapterCreator: channel.guild.voiceAdapterCreator
                            })
                            interaction.reply("I've joined " + channel.name);
                            return;
                        }
                    })
                }
            })
            
            if (channelNotFound) {
                interaction.reply('No channel found.');
            }
        })
    }
}
