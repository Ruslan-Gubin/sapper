import { createContext, useContext } from "react";
import { IGameSapperContext } from "../types/IGameSapperContext";


const GameSapperContext = createContext<IGameSapperContext | null>(null)

const useGameSapperContext = () => {
  const data = useContext(GameSapperContext)

  if (!data) {
    throw new Error('No context GameSapperContext for useGameSapperContext')
  }

return data

}

export  { GameSapperContext, useGameSapperContext }