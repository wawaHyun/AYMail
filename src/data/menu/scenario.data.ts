import { IScenarioMail } from "@/src/model/mail.model";

// 지금 플레이할 수 있는 시나리오. 나머지는 "준비 중"으로 보여준다.
export const OPEN_SCENARIO_IDS = ["sce-01", "sce-02"];

export const scenarioListData: Record<string, IScenarioMail> = {
    // 튜토리얼
    "sce-01": {
        id: "sce-01",
        kind: "game",
        threadId: "sce-01",
        chapter: "firstLetter",
        sender: "postman",
        subject: "⟡ ⍙⏃⌇⊑ ⟟⌇ ⌿⍜⌇⏁",
        preview: "알 수 없는 기호로 쓰인 편지가 도착했다...",
        body: "알 수 없는 기호로 쓰인 편지가 도착했다.\n\n"
            + "Accept your mail을 시작해보세요.\n"
            + "우체부는 과연 어떤 메일들을 보내올까요?",
        time: "99:99",
    },
    // 텍스트 선택지 로그라이크 (스탯 → 엔딩)
    "sce-02": {
        id: "sce-02",
        kind: "game",
        threadId: "sce-02",
        chapter: "sohura",
        sender: "postman",
        subject: "장거리 연애를 도와줘!",
        preview: "장거리 연애도 힘들어 죽겠는데 번역기까지 고장 나다니!",
        body: "장거리 연애 중인 바우르와 이셀.\n"
            + "쉽게 만날 수 없는 두 사람은 수년째 펜팔로 긴긴 연애를 이어가고 있습니다.\n"
            + "그런데 이게 웬일일까요?\n"
            + "잘만 작동하던 번역기가 갑자기 작동을 중지하다니!\n\n"
            + "이럴 수가!\n"
            + "안 그래도 험난한 장거리 연애에 이제 말도 안 통하게 생겼네요.\n\n"
            + "다행히 유능한 우체부는 만능 번역기를 메일 시스템에 추가해 주었습니다.\n"
            + "편지를 번역해 주며 두 사람의 사랑이 온전하게 지켜지도록 도와주세요!",
        time: "",
    },
    // 방치형 수집
    "sce-03": {
        id: "sce-03",
        kind: "game",
        threadId: "sce-03",
        chapter: "dontLate",
        sender: "postman",
        subject: "일해라 우체부",
        preview: "바쁘다 바빠 현대생활",
        body: "늑장 부리는 우체부를 재촉하여 쉼 없이 편지를 배달하게 하고,\n"
            + "온 우주에 퍼진 신기하고 재밌는 메일을 모아보세요.",
        time: "",
    },
    // 서바이벌 웹게임
    "sce-04": {
        id: "sce-04",
        kind: "game",
        threadId: "sce-04",
        chapter: "survival",
        sender: "postman",
        subject: "이 거지 같은 우주 한복판에 버려지다니!",
        preview: "편지 배달 중에 우주선이 난파돼 우주 미아가 되었다.",
        body: "이럴 수가!\n\n"
            + "언젠가 이런 일이 생길 거라 생각했지만 진짜 일어날 줄은 몰랐다.\n"
            + "편지 배달 중에 우주선 난파로 우주 미아가 된 우체부.\n"
            + "이것저것 하나씩 모아 중앙우주우체국으로 돌아가자.",
        time: "",
    },
};