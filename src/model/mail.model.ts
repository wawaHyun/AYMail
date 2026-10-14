
export interface IMail {
  id: string;            // 전부 문자열로 통일 ('work-01', 'fl-01')
  sender: string;
  subject: string;
  preview: string;       // 목록용
  body: string;          // 상세용
  time?: string;
  kind: 'work' | 'scenario';
  chapter?: string;      // 시나리오일 때만
  replies?: IReplyOption[];
}

export type ChoiceType = 'positive' | 'negative';

export interface IReplyOption {
  type: ChoiceType;
  label: string;          // 버튼 문구 (예: "받아들인다")
  replyBody: string;      // 유저가 보낸 답장 본문
  nextMailId: string | null;  // 이 선택 후 도착할 메일 (null이면 엔딩)
  endingType?: 'success' | 'fail';
}
export interface IScenarioMail extends IMail {
  kind: 'scenario';
  chapter: string; // 'first-letter'
  replies?: IReplyOption[]; // 없으면 답장 불가(엔딩 메일 등)
  threadId: string,
  ending?: {
    key: string;        // 엔딩 고유 키 (모음 저장용)
    title: string;      // 모음 화면에 보일 이름
    kind: 'good' | 'bad';
  };
}
export interface IMailLog {
  mailId: string;                  // 받은 시나리오 메일
  repliedWith?: ChoiceType;        // 유저가 고른 선택
  replyBody?: string;              // 보낸 답장 내용
  receivedAt: string;
  repliedAt?: string;
}
