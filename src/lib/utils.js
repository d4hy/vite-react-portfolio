import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//clsx is a helper function that joins class names together skipping falsy values.
//twMerge is a helper function that resolves conflicting class names and keeps the last called class name:
// like p-2 vs p-4.
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
