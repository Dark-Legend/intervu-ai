import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const copyToClipboard = (text: string) => {
  navigator?.clipboard
    ?.writeText(text)
    ?.then(() => {
      console.log("Text Copied");
    })
    ?.catch((err) => {
      console.error("Failed to copy text:", err);
    });
};
