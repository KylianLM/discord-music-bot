import { Add } from "./commands/Add";
import { Clear } from "./commands/Clear";
import { Join } from "./commands/Join";
import { Leave } from "./commands/Leave";
import { Ping } from "./commands/Ping";
import { Play } from "./commands/Play";
import { CommandInterface } from "./interfaces/command";

export const Commands: CommandInterface[] = [Ping, Join, Leave, Play, Add, Clear];
