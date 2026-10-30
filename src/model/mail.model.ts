// 공용 모델. 이 파일은 시나리오를 모른다. 시나리오 전용 타입은 <별칭>.model.ts에 둔다.

export type ChoiceType = 'positive' | 'negative';

export interface IMailEnding {
  key: string;        // 엔딩 고유 키 (모음 저장용)
  title: string;      // 모음 화면에 보일 이름
}

// S: 시나리오별 스탯 키. 스탯을 안 쓰는 시나리오(튜토리얼)는 기본값 string
export interface IReplyOption<S extends string = string> {
  type?: ChoiceType;           // 튜토리얼 전용 (positive는 버튼 강조)
  label: string;               // 버튼 문구 (예: "받아들인다")
  replyBody?: string;          // 스레드에 남길 답장 (없으면 label을 쓴다)
  nextMailId?: string | null;  // 문자열=다음 메일 고정, null=엔딩, 없음=풀에서 뽑기
  endingType?: 'success' | 'fail';
  stat?: S;                    // 오르는 스탯 (화면에 표시하지 않음, 없으면 0점)
  skip?: boolean;              // '답장하지 않는다' (잠수 +1)
}

export interface IMail {
  id: string;            // 전부 문자열로 통일 ('work-01', 'fl-01')
  sender: string;
  subject: string;
  preview: string;       // 목록용
  body: string;          // 상세용
  time?: string;
  kind: 'work'           // 업무메일 work-01
  | 'firstletter'        // 튜토리얼. fl-01
  | 'sohura'             // 장거리 연애 번역 sh-01
  | 'dontlate'           // idle. 우편배달하고 편지모으기 dl-01
  | 'survivaluniverse'   // 서바이벌 웹게임 su-01
  | 'cookieclicker'      // 쿠키 클리커 게임 cc-01
  ;
  replies?: IReplyOption[];  // 없으면 답장 불가 (엔딩 메일 등)
  ending?: IMailEnding;      // 엔딩 메일일 때만
}

export interface IFirstletterMail extends IMail {
  kind: 'firstletter';
}

// 편지 한 통. 전달 편지가 여러 통일 수 있어서 배열로 쓴다
export interface ILetter {
  sender?: string;      // 전달 편지의 발신자 (postman형에서 사용)
  original: string;     // □ ■ ░ 로 표기한 원문
  translated: string;   // 자동번역 결과
  note?: string;        // 번역기 메모
  reliability?: string; // '낮음' | '중간'
}

// 스탯 선택지 시나리오 공용 폼. 시나리오는 S에 자기 스탯 키만 넣는다 (예: ISohuraMail)
export interface IReplyMail<S extends string = string> extends IMail {
  form: 'letter' | 'postman';           // letter: 연인의 편지, postman: Postman의 업무 메일
  letters?: ILetter[];
  replies?: IReplyOption<S>[];
}

export interface IScenarioMail extends IMail {
  entry: string;               // 이동할 경로 (예: '/mail')
}

export interface IMailLog {
  mailId: string;              // 받은 시나리오 메일
  repliedWith?: ChoiceType;    // 유저가 고른 선택 (튜토리얼)
  choiceIndex?: number;        // 고른 선택지 번호 (replies 배열 순서 기준)
  replyBody?: string;          // 보낸 답장 내용
  receivedAt: string;
  repliedAt?: string;
}

// 판정에 넘기는 결과. 스탯은 로그에서 계산해서 만든다
export interface IReplyResult<S extends string = string> {
  stats: Record<S, number>;
  skipCount: number;           // '답장하지 않는다' 횟수
}

export interface IEndingRule<S extends string = string> {
  mailId: string;              // 조건이 맞으면 이어서 도착할 메일 (엔딩 또는 특수 이벤트)
  // 메서드 문법: 시나리오들을 한 registry에 담을 때 타입 에러를 피한다
  when(result: IReplyResult<S>): boolean;
}

// 스탯 선택지 시나리오의 설정. 시나리오는 이 객체와 메일 데이터만 새로 만든다
export interface IReplyScenario<S extends string = string> {
  kind: IMail['kind'];         // 이 시나리오의 로그를 거르는 기준
  statKeys: S[];
  statPoint: number;           // 선택당 오르는 스탯
  firstMailId: string;         // 시작할 때 도착하는 고정 첫 이벤트
  poolIds: string[];           // 뽑기 대상 (첫 이벤트, 엔딩, 특수 이벤트는 제외)
  drawCount: number;           // 풀에서 뽑을 개수 (총 이벤트 = 1 + drawCount)
  endingRules: IEndingRule<S>[]; // 위에서부터 먼저 맞는 조건이 적용된다
}