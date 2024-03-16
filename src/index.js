import { van } from "./lib/index.js";
import { GameView } from "./game/index.js";

const root = document.getElementById("root");
van.add(root, GameView)