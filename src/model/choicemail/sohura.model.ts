import type { IReplyMail, IReplyOption, IReplyScenario } from './choicemail.model';

export type SohuraStatKey = 'literal' | 'kind' | 'bold'; // 충실 / 다정 / 대담

// 번역 컨셉: 편지 한 통. 전달 편지가 여러 통일 수 있어서 배열로 쓴다
export interface ISohuraLetter {
  sender?: string;      // 전달 편지의 발신자 (postman형에서 사용)
  original: string;     // □ ■ ░ 로 표기한 원문
  translated: string;   // 자동번역 결과
  note?: string;        // 번역기 메모
  reliability?: string; // '낮음' | '중간'
}

export interface ISohuraMail extends IReplyMail<SohuraStatKey> {
  form: 'letter' | 'postman';  // letter: 연인의 편지, postman: Postman의 업무 메일
  letters?: ISohuraLetter[];
}
export type ISohuraReply = IReplyOption<SohuraStatKey>;
export type ISohuraScenario = IReplyScenario<SohuraStatKey>;