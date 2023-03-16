import { IcomplexityVariant } from "./IcomplexityVariant";


interface ISapperSlice {
  complexity: IcomplexityVariant;
  resultTable: {time: number, complexity: string}[]
}

export type { ISapperSlice };
