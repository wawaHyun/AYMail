import { IMail } from "./mail.model";

export type SohuraStatKey = 'literal' | 'kind' | 'bold'; // 충실 / 다정 / 대담
export type ISohuraStats = Record<SohuraStatKey, number>;

export interface ISohuraLetter {
  sender?: string;      // 전달 편지의 발신자 (Postman형에서 사용)
  original: string;     // □ ■ ░ 로 표기한 원문
  translated: string;   // 자동번역 결과
  note?: string;        // 번역기 메모
  reliability?: string; // '낮음' | '중간'
}

export interface ISohuraEventChoice {
  label: string;       // 버튼 문구
  replyBody?: string;  // 스레드에 남길 답장 (없으면 label을 쓴다)
  stat?: SohuraStatKey; // 오르는 스탯 (화면에 표시하지 않음)
  skip?: boolean;      // '답장하지 않는다' (잠수 +1)
}

export interface ISohuraMail extends IMail {
  kind: 'sohura';
  form: 'letter' | 'postman';
  first?: boolean;     // 항상 첫 번째로 오는 이벤트
  letters?: ISohuraLetter[];
  choices: ISohuraEventChoice[];
}