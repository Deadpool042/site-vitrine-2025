// toggleFunctions.ts
import { Dispatch, SetStateAction } from "react";

export const toggle = (
  setterFunction: Dispatch<SetStateAction<boolean>>
): void => {
  setterFunction(prevState => !prevState);
};
