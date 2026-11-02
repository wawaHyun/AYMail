import { IMail } from "./choicemail.model";

export interface IFirstletterMail extends IMail {
  kind: 'firstletter';
}
