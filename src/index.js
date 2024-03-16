import { van } from "./lib/index.js";

const { div, p } = van.tags;

function GameView() {

    return (
        div(
            // TODO : Enable tailwind intellisense
            // https://stackoverflow.com/questions/66614875/how-can-i-enable-tailwind-intellisense-outside-of-classname
            p({ class: "text-white" }, "TODO: GameView")
        )
    )
}

const root = document.getElementById("root");
van.add(root, GameView)