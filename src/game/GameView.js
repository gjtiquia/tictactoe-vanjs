import { van } from "../lib/index.js";

const { div, p, span } = van.tags;

const PLAYER = {
    X: "X",
    O: "O"
}

const CELL_STATE = {
    EMPTY: "",
    X: "X",
    O: "O"
}

export function GameView() {

    const currentPlayer = van.state(PLAYER.O);

    function onCellClicked() {
        if (currentPlayer.val === PLAYER.O) {
            currentPlayer.val = PLAYER.X;
        }

        else if (currentPlayer.val === PLAYER.X) {
            currentPlayer.val = PLAYER.O;
        }
    }

    return (
        div(
            { class: "w-full flex flex-col gap-4 items-center" },

            div(
                { class: "w-full max-w-96 aspect-square grid grid-rows-3 divide-y-4 divide-slate-500/30 border-4 border-slate-500/30 rounded-lg" },

                div(
                    { class: "grid grid-cols-3 divide-x-4 divide-slate-500/30" },
                    Cell({ currentPlayer: currentPlayer, onClick: onCellClicked }),
                    Cell({ currentPlayer: currentPlayer, onClick: onCellClicked }),
                    Cell({ currentPlayer: currentPlayer, onClick: onCellClicked }),
                ),

                div(
                    { class: "grid grid-cols-3 divide-x-4 divide-slate-500/30" },
                    Cell({ currentPlayer: currentPlayer, onClick: onCellClicked }),
                    Cell({ currentPlayer: currentPlayer, onClick: onCellClicked }),
                    Cell({ currentPlayer: currentPlayer, onClick: onCellClicked }),
                ),

                div(
                    { class: "grid grid-cols-3 divide-x-4 divide-slate-500/30" },
                    Cell({ currentPlayer: currentPlayer, onClick: onCellClicked }),
                    Cell({ currentPlayer: currentPlayer, onClick: onCellClicked }),
                    Cell({ currentPlayer: currentPlayer, onClick: onCellClicked }),
                ),
            ),

            p({ class: "text-slate-50" }, "Current Player: ", span(currentPlayer))
        )
    );
}

/**
 * @typedef {Object} CellProps
 * @property {import("../lib/van-1.5.0/van-1.5.0.min.js").State<string>} currentPlayer
 * @property {() => void} onClick
 */

/**
 * @param {CellProps} props 
 * @returns 
 */
function Cell(props) {

    const cellState = van.state(CELL_STATE.EMPTY);

    function onCellClicked() {

        if (cellState.val !== CELL_STATE.EMPTY) return;

        if (props.currentPlayer.val === PLAYER.X) {
            cellState.val = CELL_STATE.X;
        }

        else if (props.currentPlayer.val === PLAYER.O) {
            cellState.val = CELL_STATE.O;
        }

        props.onClick();
    }

    return (
        div({
            class: `
                flex justify-center items-center 
                text-slate-50 text-6xl sm:text-7xl
                hover:bg-slate-600/50 active:bg-slate-800/50
            `,
            onclick: () => onCellClicked()
        },
            cellState
        )
    )
}


