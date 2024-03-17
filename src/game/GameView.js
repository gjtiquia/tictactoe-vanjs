import { van } from "../lib/index.js";

const { div, p } = van.tags;

export function GameView() {
    return (
        div(
            { class: "w-full max-w-96 aspect-square grid grid-rows-3 divide-y-4 divide-slate-500/30 border-4 border-slate-500/30 rounded-lg" },

            div(
                { class: "grid grid-cols-3 divide-x-4 divide-slate-500/30" },
                Cell,
                Cell,
                Cell,
            ),

            div(
                { class: "grid grid-cols-3 divide-x-4 divide-slate-500/30" },
                Cell,
                Cell,
                Cell,
            ),

            div(
                { class: "grid grid-cols-3 divide-x-4 divide-slate-500/30" },
                Cell,
                Cell,
                Cell,
            ),
        )
    );
}

function Cell() {

    const cellState = van.state(CELL_STATE.EMPTY);

    return (
        div({
            class: `
                flex justify-center items-center 
                text-slate-50 text-6xl sm:text-7xl
                hover:bg-slate-600/50 active:bg-slate-800/50
            `,
            onclick: () => cellState.val = CELL_STATE.X
        },
            cellState
        )
    )
}

const CELL_STATE = {
    EMPTY: "",
    X: "X",
    O: "O"
}
