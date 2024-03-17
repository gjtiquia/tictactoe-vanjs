import { van } from "./lib/index.js";
import { GameView } from "./game/index.js";

const root = document.getElementById("root");
// @ts-ignore
van.add(root, GameView)