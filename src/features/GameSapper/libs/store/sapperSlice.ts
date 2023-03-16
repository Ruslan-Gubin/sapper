import { TypeRootState } from "@/app/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { complexityVariant } from "../data/complexityVariant";
import { ISapperSlice } from "../types/ISapperSlice";


const initialState: ISapperSlice = {  
complexity: complexityVariant[0],
resultTable: [] as {time: number, complexity: string}[],
};

const sapperSlice = createSlice({
  name: "sapper",
  initialState,
  reducers: {

    addResultProggres(state, action: PayloadAction<{time: number, complexity: string}>) {
      const resultItem = {time: action.payload.time, complexity: action.payload.complexity}

      const filterComplexity = state.resultTable.filter(item => item.complexity === resultItem.complexity)
      .sort((a,b) => b.time - a.time);
      const badTime = filterComplexity[0]
      
      
      if (!filterComplexity || filterComplexity.length < 10 ) {
        state.resultTable.push(resultItem)
      } else {
      const findItem =  state.resultTable.find(item => item.complexity === badTime.complexity && item.time === badTime.time)
        if (findItem && findItem.time > resultItem.time) {
          findItem.complexity = action.payload.complexity
          findItem.time = action.payload.time
        }
      }
    },
    
    changeComplexity(state, action: PayloadAction<{value: string}>) {
      const findComplexity = complexityVariant.find(item => item.name === action.payload.value)
      
      if (!findComplexity) return

      state.complexity = findComplexity
    },


  },
});

export const selectSapperAction = (state: TypeRootState) => state.sapper;

export const sapperAction = sapperSlice.actions;

export const sapperReducer = sapperSlice.reducer;