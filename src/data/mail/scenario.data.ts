import { IScenarioMail } from "@/src/model/mail.model";


export const scenarioListData: Record<string, IScenarioMail> = {
    'sce-01': { //튜토리얼.
    id: 'sce-01',
    kind: 'scenario',
    threadId : 'sce-01',
    chapter: 'first-letter',
    sender: 'postman',
    subject: '⟡ ⍙⏃⌇⊑ ⟟⌇ ⌿⍜⌇⏁',
    preview: '알 수 없는 기호로 쓰인 편지가 도착했다...',
    body: '알 수 없는 기호로 쓰인 편지가 도착했다.\n\nAccept your mail을 시작해보세요.\n우체부는 과연 어떤 메일들을 보내올까요?',
    time: '99:99',
},
    'sce-02': { //텍스트 선택지 로그라이크. 랜덤선택지를 통해 스탯을 얻고, 스탯에 따라 엔딩이 결정된다.
    id: 'sce-02',
    kind: 'scenario',
    threadId : 'sce-02',
    chapter: 'Sohura',
    sender: 'postman',
    subject: '장거리 연애를 도와줘!',
    preview: '장거리 연애도 힘들어죽겠는데 번역기까지 고장나다니!',
    body: '장거리 연애 중인 바우르와 이셀.\n쉽게 만날 수 없는 두 사람은 수년째 펜팔로 긴긴 연애를 이어가고 있습니다.\n그런데 이게 왠일일까요?\n잘만 작동하던 번역기가 갑자기 작동을 중지하다니!\n\n이럴수가!\n안그래도 험난한 장거리 연애에 이제 말도 안통하게 생겼네요.\n\n다행이도 유능한 우체부는 만능 번역기를 메일시스템에 추가해주었습니다.\n편지를 번역해주며 두 사람의 사랑이 온전하게 지켜지도록 도와주세요!',
    time: '',
},
    'sce-03': { //방치형 수집. 우체부가 배달을 가고, 긴 시간을 갈수록 여러개의 메일이나 정크아이템(우주쓰레기)를 주워온다. 컬렉션(도감)필요. 작동 중에는 화면 오른쪽 하단에 우체부 도트 움직일예정.
    id: 'sce-03',
    kind: 'scenario',
    threadId : 'sce-03',
    chapter: 'DontLate',
    sender: 'postman',
    subject: '일해라 우체부',
    preview: '바쁘다바빠 현대생활',
    body: '늑장부리는 우체부를 재촉히 쉼없이 편지를 배달하게 하고,\n온 우주에 퍼진 신기하고 재밌는 메일을 모아보세요.',
    time: '',
},
    'sce-04': { //서바이벌 웹게임
    id: 'sce-04',
    kind: 'scenario',
    threadId : 'sce-04',
    chapter: 'Survival',
    sender: 'postman',
    subject: '이 거지같은 우주 한복판에 버려지다니!',
    preview: '이럴수가!\n\n언젠가 이런일이 생길거라 생각했지만 진짜 일어날 줄은 몰랐다.\n편지 배달 중에 우주선 난파로 우주미아가 된 우체부.\n이것저것 하나씩 모아 중앙우주우체국으로 돌아가자',
    body: '',
    time: '',
},
}