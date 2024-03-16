import { van } from "../lib/index.js";

const { div, p } = van.tags;

export function GameView() {
    return (
        div(
            { class: "w-full max-w-96 aspect-square grid grid-flow-row divide-y-4 divide-slate-500/30 border-4 border-slate-500/30 rounded-lg" },

            div(
                { class: "grid grid-flow-col divide-x-4 divide-slate-500/30" },
                Cell,
                Cell,
                Cell,
            ),

            div(
                { class: "grid grid-flow-col divide-x-4 divide-slate-500/30" },
                Cell,
                Cell,
                Cell,
            ),

            div(
                { class: "grid grid-flow-col divide-x-4 divide-slate-500/30" },
                Cell,
                Cell,
                Cell,
            ),
        )
    );
}

function Cell() {
    return (
        div({ class: "flex justify-center items-center text-slate-50 text-6xl sm:text-7xl" }, "O")
    )
}
