export function env(key:string): string
{
    const ret = process.env[key];
    if (ret === undefined) {
        throw new Error("process.env." + key + " is undefined!");
    }

    return ret;
}