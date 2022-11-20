import {Client, Events} from "discord.js";
import {Commands} from "../Commands";

export default (client: Client): void => {
    client.once(Events.ClientReady, async () => {
        if (!client.user || !client.application) {
            return;
        }        

        console.log(`${client.user.username} is online`);
    });
};
