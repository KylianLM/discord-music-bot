import {Command} from "./Command";
import {Ping} from "./commands/Ping";
import {Join} from "./commands/Join";
import { Leave } from "./commands/Leave";
import { Play } from "./commands/Play";

export const Commands: Command[] = [Ping, Join, Leave, Play];
