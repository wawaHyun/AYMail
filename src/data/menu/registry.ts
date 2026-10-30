import { IMail } from "@/src/model/mail.model";
import { workMails } from "../scenarios/workMails";
import { firLetterData } from "../scenarios/firLetter.data";
import { sohuraData } from "../scenarios/sohura.data";

export const mailRegistry: Record<string, IMail> = {
  ...workMails,
  ...firLetterData,
  ...sohuraData,
};