import { createAudioPlayer, createAudioResource, getVoiceConnection } from "@discordjs/voice";
import { Guild } from "discord.js";
import { join } from "path";

export class Player {
    private static instance: Player

    private constructor(){}

    public static getInstance(): Player {
        if (!Player.instance) {
            Player.instance = new Player();
        }

        return Player.instance;
    }

    public test(guild: Guild)
    {
        const player = createAudioPlayer();
        const resource = createAudioResource(join(__dirname, 'videoplayback.mp3'), {inlineVolume: true})
        resource.volume?.setVolume(0.5);
        
        player.play(resource);

        const connection = getVoiceConnection(guild.id);
        connection?.subscribe(player);
    }
}