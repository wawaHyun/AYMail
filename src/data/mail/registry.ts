import { IMail } from "@/src/model/mail.model";
import { workMails } from "./workMails";
import { firLetterData } from "./firLetter.data";

export const mailRegistry: Record<string, IMail> = {
  ...workMails,
  ...firLetterData,
  // ...sohuraData,
};