import { IMail } from "@/src/model/mail.model";
import { workMails } from "./workMails";
import { firLetterData } from "./firLetter.data";
import { sohuraData } from "./sohura.data";

export const mailRegistry: Record<string, IMail> = {
  ...workMails,
  ...firLetterData,
  ...sohuraData,
};