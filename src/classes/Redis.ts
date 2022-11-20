import { RedisClientType } from "@redis/client";
import { createClient } from "redis";
import ytdl from "ytdl-core";
import { env } from "../utils/env";



export default class Redis {
    client: RedisClientType;
    queueIdentifier: string;

    constructor() {
        this.queueIdentifier = 'DiscJockey:queue';
        this.client = createClient({
            url: env('REDIS_URL'),
        })

        this.client.on("connect", () => {
            console.log(`Redis connection established`);
        })

        this.client.on("error", (error) => {
            console.error(`Redis error, service degraded: ${error}`);
        });

        this.client.connect();
    }

    add = async (ytLink: string) => {
        await this.client.rPush(this.queueIdentifier, ytLink);
    }

    clear = async() => {
        const result = await this.client.del(this.queueIdentifier);

        return result;
    }
}