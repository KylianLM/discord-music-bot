import { ChannelType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { joinVoiceChannel } from "@discordjs/voice";
import { CommandInterface } from "src/interfaces/command";

export const Join: CommandInterface = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription("Join the current user's channel.")
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to echo into')
                .addChannelTypes(ChannelType.GuildVoice)),
    run: async (interaction: ChatInputCommandInteraction) => {
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
