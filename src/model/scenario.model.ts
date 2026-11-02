import { IMail } from "./choicemail/choicemail.model";

export interface IScenarioMail extends IMail {
  entry: string;               // 이동할 경로 (예: '/mail')
}