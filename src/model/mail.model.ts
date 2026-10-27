
export interface IMail {
  id: string; 
  sender: string;
  subject: string;
  preview: string;       // 목록용
  body: string;          // 상세용
  time?: string;
  kind: 'work' // 업무메일 work-01
  | 'scenario'  //시나리오 목록 sce-01
  | 'firstletter' //튜토리얼. fl-01
  | 'sohura' // 장거리 연애 번역 sh-01
  | 'dontlate' //idle. 우편배달하고 편지모으기 dl-01
  | 'survivaluniverse' //서바이벌 웹게임 su-01
  ; 
  replies?: IReplyOption[],  
  original: string;     // □ ■ ░ 로 표기한 원문
  translated: string;   // 자동번역 결과
  note?: string;        // 번역기 메모
  reliability?: string; // '낮음' | '중간'

  label: string;       // 버튼 문구
  replyBody?: string;  // 스레드에 남길 답장 (없으면 label을 쓴다)
  //stat?:  // 오르는 스탯 (화면에 표시하지 않음), 시나리오마다 별개로 설정
  skip?: boolean;      // '답장하지 않는다' (잠수 +1)
  form: 'letter' | 'postman';
  first?: boolean;     // 항상 첫 번째로 오는 이벤트
}

export type ChoiceType = 'positive' | 'negative';

export interface IReplyOption {
  type: ChoiceType;
  label: string;          // 버튼 문구 (예: "받아들인다")
  replyBody: string;      // 유저가 보낸 답장 본문
  nextMailId: string | null;  // 이 선택 후 도착할 메일 (null이면 엔딩)
  endingType?: 'success' | 'fail';
}
export interface IFirstletterMail extends IMail {
  kind: 'firstletter';
  //stat 안 씀
  replies?: IReplyOption[]; // 없으면 답장 불가(엔딩 메일 등)
  ending?: {
    key: string;        // 엔딩 고유 키 (모음 저장용)
    title: string;      // 모음 화면에 보일 이름
    kind: 'good' | 'bad';
  };
}

export interface ISohuraMail extends IMail {
  kind: 'sohura',
  stat : 'literal' | 'kind' | 'bold'; // 충실 / 다정 / 대담
}

export interface IScenarioMail extends IMail {
  entry : string;
}

export interface IMailLog {
  mailId: string;                  // 받은 시나리오 메일
  repliedWith?: ChoiceType;        // 유저가 고른 선택
  replyBody?: string;              // 보낸 답장 내용
  receivedAt: string;
  repliedAt?: string;
}
