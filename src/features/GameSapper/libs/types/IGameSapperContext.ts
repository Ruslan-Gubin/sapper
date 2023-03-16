import { MouseEvent } from "react";
import { IFieldSapper } from "./IFieldSapper";



interface IGameSapperContext {
  lostId: number | null;
  handleContextMenu: (e: MouseEvent<HTMLDivElement>, fieldId: number) => void;
  handleClickField: (fieldId: number) => void;
  board: IFieldSapper[];
  widthBoard: number;
  heightBoard: number;
  flagCount: number;
  timeGame: number;
  gameProgress: {
    progress: "start" | "game" | "finish" | "";
    result: "win" | "loss" | "";
  };
  handleNewGame: () => void;
  sizeField: number;
}

export type { IGameSapperContext };
