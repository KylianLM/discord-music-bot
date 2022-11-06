import {Command} from "./Command";
import {Ping} from "./commands/Ping";
import {Join} from "./commands/Join";
import { Leave } from "./commands/leave";

export const Commands: Command[] = [Ping, Join, Leave];
