import { ChatInputCommandInteraction, Client, CommandInteraction, EmbedBuilder, SlashCommandBuilder } from "discord.js";
import { CommandInterface } from "src/interfaces/command";
import ytdl from "ytdl-core";
import fs from 'fs';
import { env } from "../utils/env";
import Redis from "../classes/Redis";

export const Add: CommandInterface = {
    data: new SlashCommandBuilder()
        .setName("add")
        .setDescription("Adds music to the queue.")
        .addStringOption(option =>
            option.setName("youtube")
                .setDescription("Link to the youtube video")
                .setRequired(true)
        ),
    run: async (interaction: ChatInputCommandInteraction) => {
        interaction.deferReply();
        const ytLink = interaction.options.getString('youtube') ?? '';
        let redis = new Redis();
        redis.add(ytLink)
        let detail = await ytdl.getBasicInfo(ytLink);
        if (detail) {
            /*
                    .addFields(
                    { name: 'Regular field title', value: 'Some value here' },
                    { name: '\u200B', value: '\u200B' },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                    { name: 'Inline field title', value: 'Some value here', inline: true },
                )
                .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
                */
            const exampleEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(detail.videoDetails.title)
                .setURL(ytLink)
                .setAuthor({ name: detail.videoDetails.author.name, url: detail.videoDetails.author.channel_url })
                .setThumbnail(detail.thumbnail_url)
                .setTimestamp()
                .setFooter({ text: 'Added by Disc Jockey' });

                if (detail.videoDetails.thumbnails.length > 0) {
                    exampleEmbed.setImage(detail.videoDetails.thumbnails[0].url)
                }
            interaction.followUp({
                embeds: [exampleEmbed]
            })
        } else {
            interaction.reply('ERROR');
        }
    }
}
