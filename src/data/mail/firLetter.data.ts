import { IScenarioMail } from "@/src/model/mail.model";

// 같은 시나리오(threadId)는 subject를 동일하게 쓰고, 'Re:'는 화면에서 계산해서 붙인다.
// time은 연출용 고정값(fl-01의 99:99)만 두고, 나머지는 생략하면 도착 시각(receivedAt)을 쓴다.
export const firstLetter: Record<string, IScenarioMail> = {
  'fl-01': {
    id: 'fl-01',
    kind: 'scenario',
    chapter: 'first-letter',
    threadId: 'fl-main',
    sender: 'Postman',
    subject: '⏁⊑⟒ ⎐⟒⟟⌰ ⌇⟒⏁ ⎎⍀⟒⟒',
    preview: '⟡ ⍙⏃⌇⊑ ⟟⌇ ⌿⍜⌇⏁ ⌰⟟⎐⟒ ⌇⏁⏃⍀ ⍜⋏...',
    body: '⟡ ⍙⏃⌇⊑ ⟟⌇ ⌿⍜⌇⏁ ⌰⟟⎐⟒ ⌇⏁⏃⍀ ⍜⋏ ⏁⊑⟒. ⍜⏁⊑⟒⍀ ⌇⟟⎅⟒ ⍜⎎ ⏁⊑⟒ ⎐⟒⟟⌰ ⌇⟒⏁ ⎎⍀⟒⟒ ⏁⊑⟒. \n⌇⍜⎍⌰ ⍙⊑⟒⋏ ⏁⊑⟒ ⎅⍜⍜⍀. \n⍜⌿⟒⋏⌇ ⟟ ⏃⋔ ⊑⟒⍀⟒ ⏃⋏⎅ ⟟ ⏃⋔ ⋏⍜⏁ ⊑⟒⍀⟒ ⍀⟒⏃⎅. \n⏁⊑⟒ ⌰⟟⋏⟒⌇ ⏁⊑⏃⏁ ⋔⍜⎐⟒ ⏁⊑⍀⍜⎍☌⊑ ⏁⟟⋔⟒ ⌇⏁⏃⋏⎅. \n⏃⏁ ⏁⊑⟒ ⎅⍜⍜⍀ ⏃⋏⎅. \n⎅⍜ ⋏⍜⏁ ⌰⍜⍜☍ ⏃⏁ ⋔⟒ ⟟ ⊑⏃⎐⟒ ⌇⟒⟒⋏. ⊬⍜⎍ ⏃⌰⍀⟒⏃⎅⊬ ⏁⊑⟒ ⌰⟟⎎⟒. \n⏁⊑⏃⏁ ⍙⏃⌇ ⋏⟒⎐⟒⍀ ⊬⍜⎍⍀⌇ ⟡ ⌇⟒⏃⌰ ⏁⊑⟒ ⌰⟒⏁⏁⟒⍀ ⍙⟟⏁⊑ ⏁⊑⟒ ⏁⍀⎍⏁⊑ ⏃⋏⎅. \n⏁⊑⟒⋏ ⎎⍜⍀☌⟒⏁. ⏁⊑⟒ ⋏⏃⋔⟒ ⍜⎎ ⏁⊑⟒ ⌇⏁⏃⍀⌇.',
    time: '99:99', // 깨진 시간 연출용 고정값
    replies: [
      { type: 'positive', label: '(메일이 깨졌잖아.. 재전송을 부탁해보자)', replyBody: '메일 오류인 것 같습니다. 재전송 부탁드립니다.', nextMailId: 'fl-02' },
      { type: 'negative', label: '(뭐라는거야?)', replyBody: '잘못 보낸 것 같습니다. 수신자 확인 후 재발송 부탁드립니다.', nextMailId: 'fl-fail' },
    ],
  },
  'fl-02': {
    id: 'fl-02',
    kind: 'scenario',
    chapter: 'first-letter',
    threadId: 'fl-main',
    sender: 'Postman',
    subject: 'The Veil Set Free',
    preview: '번역 대상자를 잘못 설정한 것 같습니다...',
    body: '아, 죄송합니다! 번역 대상자를 행성 단위로 잘못 설정한 것 같습니다.\n이번에는 제대로 번역해서 보내드립니다.\n\n그런데 마침 부탁드리고 싶은 일이 하나 있는데요.\n괜찮으시다면 이번 일도 맡아주실 수 있을까요?',
    replies: [
      { type: 'positive', label: '제가 무슨 일을 해야 하죠?', replyBody: '제가 무슨 일을 해야 하죠?', nextMailId: 'fl-03' },
      { type: 'negative', label: '메일 잘못 보내셨습니다.', replyBody: '메일 잘못 보내셨습니다.', nextMailId: 'fl-fail' },
    ],
  },
  'fl-03': {
    id: 'fl-03',
    kind: 'scenario',
    chapter: 'first-letter',
    threadId: 'fl-main',
    sender: 'Postman',
    subject: 'The Veil Set Free',
    preview: '장거리 연애 중인 두 사람의 편지를...',
    body: '이번 의뢰는 장거리 연애 중인 두 사람에 관한 일입니다.\n서로 다른 행성에 살고 있어서 사용하는 언어도 다르거든요.\n\n두 사람이 주고받는 편지를 번역하고, 필요하다면 답장도 대신 작성해 주셨으면 합니다.\n번역해야 할 언어는 루메니아어입니다.\n혹시 가능하실까요?',
    replies: [
      { type: 'positive', label: '저는 영어는 아는데 그런 언어는 모르겠어요.', replyBody: '저는 영어는 아는데 그런 언어는 모르겠어요.', nextMailId: 'fl-04' },
      { type: 'negative', label: '장난치지 마세요.', replyBody: '장난치지 마세요.', nextMailId: 'fl-fail' },
    ],
  },
  'fl-04': {
    id: 'fl-04',
    kind: 'scenario',
    chapter: 'first-letter',
    threadId: 'fl-main',
    sender: 'Postman',
    subject: 'The Veil Set Free',
    preview: '혹시 제가 사람을 잘못 찾은 걸까요?',
    body: '잠깐만요. 혹시 제가 사람을 잘못 찾은 걸까요?\n\n죄송합니다. 제가 요즘 너무 바빠서 정신이 없었네요.\n원래는 이 업무를 도와주던 분이 계셨는데,\n제가 연락처를 잘못 확인한 모양입니다.\n\n그래도 괜찮으시다면 번역 업무를 맡아주실 수 있을까요?\n제가 특별 번역기를 메일 시스템에 추가해 드리겠습니다.',
    replies: [
      { type: 'positive', label: '할게요!', replyBody: '할게요!', nextMailId: 'fl-05' },
      { type: 'negative', label: '회사 일로 바빠 죽겠는데 무슨.. 됐어요!', replyBody: '회사 일로 바빠 죽겠는데 무슨.. 됐어요!', nextMailId: 'fl-fail' },
    ],
  },
  'fl-05': {
    id: 'fl-05',
    kind: 'scenario',
    chapter: 'first-letter',
    threadId: 'fl-main',
    sender: 'Postman',
    subject: 'The Veil Set Free',
    preview: '앞으로 잘 부탁드립니다!',
    body: '정말 감사합니다! 덕분에 한시름 놓았네요.\n\n앞으로 다른 차원에서 온 편지의 번역이나 답장 작성이 필요할 때 종종 도움을 부탁드리겠습니다.\n특별 번역기는 지금 추가해 두었습니다.\n메일을 받으시면 평소처럼 확인해 주세요.\n\n앞으로 잘 부탁드립니다!',
    replies: [
      { type: 'positive', label: '저도 잘 부탁해요!', replyBody: '저도 잘 부탁해요!', nextMailId: 'fl-06' },
    ],
  },
  'fl-06': {
    id: 'fl-06',
    kind: 'scenario',
    chapter: 'first-letter',
    threadId: 'fl-main',
    sender: 'System',
    subject: 'The Veil Set Free',
    preview: '특별 번역기가 활성화되었습니다.',
    body: '특별 번역기가 활성화되었습니다.\n새로운 차원의 의뢰를 기다려 보세요.',
    ending: { key: 'fl-success', title: '다른 차원의 의뢰', kind: 'good' },
  },
  'fl-fail': {
    id: 'fl-fail',
    kind: 'scenario',
    chapter: 'first-letter',
    threadId: 'fl-main',
    sender: 'Postman',
    subject: '⏁⊑⟒ ⎐⟒⟟⌰ ⌇⟒⏁ ⎎⍀⟒⟒', // 깨진 원제 유지
    preview: '죄송합니다. 메일을 잘못 보낸 것 같습니다.',
    body: '죄송합니다. 메일을 잘못 보낸 것 같습니다.\n수신자를 다시 확인하겠습니다.\n번거롭게 해드려 죄송합니다.',
    ending: { key: 'fl-fail', title: '일이나 해야겠다', kind: 'bad' },
  },
};