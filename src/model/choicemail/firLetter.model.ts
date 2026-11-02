import { IMail } from "./choicemail/choicemail.model";

export interface IFirstletterMail extends IMail {
  kind: 'firstletter';
}
