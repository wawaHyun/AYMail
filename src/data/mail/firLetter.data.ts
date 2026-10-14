import { IScenarioMail } from "@/src/model/mail.model";

export const firstLetter: Record<string, IScenarioMail> = {
  'fl-01': {
    id: 'fl-01',
    kind: 'scenario',
    chapter: 'first-letter',
    sender: '익명의 우체부',
    subject: '⟡ ⍙⏃⌇⊑ ⟟⌇ ⌿⍜⌇⏁',
    preview: '알 수 없는 기호로 쓰인 편지가 도착했다...',
    body: '알 수 없는 기호로 쓰인 편지가 도착했다...',
    time: '09:00',
    replies: [
      { type: 'positive', label: '답장한다', replyBody: '읽을 수 있습니다. 계속 보내주세요.', nextMailId: 'fl-02-success', endingType: undefined },
      { type: 'negative', label: '무시한다', replyBody: '잘못 보내신 것 같습니다.', nextMailId: 'fl-02-fail' },
    ],
  },
  'fl-02-success': {
    id: 'fl-02-success', 
    kind: 'scenario',
    chapter: 'first-letter', 
    sender: '익명의 우체부',
    subject: '앞으로의 의뢰', 
    preview: '다른 차원의 편지를 전하겠습니다...', 
    body: '다른 차원의 편지를 전하겠습니다...', 
    time: '09:05',
    ending: { key: 'fl-success', title: '다른 차원의 의뢰', kind: 'good' },
    // replies 없음 → 엔딩. 두 번째 시나리오 시작 트리거는 아래 ending 처리에서
  },
  'fl-02-fail': {
    id: 'fl-02-fail', 
    kind: 'scenario',
    chapter: 'first-letter', 
    sender: '시스템',
    subject: '(편지가 사라졌습니다)', 
    preview: '일이나 해야겠다.', 
    body: '일이나 해야겠다.', 
    time: '09:05',
    ending: { key: 'fl-fail', title: '일이나 해야겠다', kind: 'bad' },
  },
};