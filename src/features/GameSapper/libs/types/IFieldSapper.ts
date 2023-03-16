interface IFieldSapper {
  vertical: number;
  horizont: number;
  state: "privat" | "transparent" | "flag" | "question";
  bomb: boolean;
  neighborsBonb: number;
  id: number;
}

export type { IFieldSapper };
