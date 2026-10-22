# AcceptYourMail 개발 규칙

## 기본
- 스택: Next.js + React + TypeScript, Tailwind CSS, Zustand, Vercel 배포
- 코드는 한 줄 100자 이하. 도구 없이 직접 지킨다 (Prettier 자동화는 쓰지 않음)
- `h1`, `p` 대신 `div`, `span`을 쓴다 (Expo 이식성)

## 이름 규칙
- `use`로 시작하는 건 진짜 React 훅만 (`useEndingData`, `useMailAction`)
- 훅이 아닌 `getState()` 래퍼는 `get`으로 시작 (`getEndingState`)
- 컴포넌트는 PascalCase, 상수는 UPPER_SNAKE (`TUTORIAL_CLEAR_KEY`)
- 타입은 `I` 접두사 유지 (`IMail`, `IMailLog`)

## 파일 이름
- 파일은 전부 camelCase (`mailThread.tsx`, `firLetter.data.ts`)
- 시나리오 데이터는 `<이름>.data.ts`
- Next.js 예약 이름(`page.tsx`, `layout.tsx`)과 라우트 폴더(`(mail)`, `[id]`)는 예외
- 알려진 오타: `mailLIstToolbar.tsx` → `mailListToolbar.tsx`로 바꿀 것

## 시나리오 데이터
- 컴포넌트와 페이지는 특정 시나리오(`firstLetter` 등)를 직접 import하지 않고 `registry.ts`만 통해 접근한다
- 메일 id는 시나리오 접두사를 붙인다 (`fl-01`, `fl-fail`)
- 튜토리얼(first-letter)은 `fl-success` 엔딩을 한 번 해금하면 이후 restart에서 건너뛴다
  - `Re`(전체 초기화)는 엔딩 기록까지 지우므로 튜토리얼도 다시 나온다

## 스토어
- 상태는 `data`, 동작은 `action` 객체에 둔다
- 화면에서는 `use...Data`, `use...Action`만 쓰고, 컴포넌트 밖에서는 `get...State`를 쓴다
- 남겨야 하는 것(엔딩 수집, 메일 진행)은 `localStorage`, 세션 한정(테마)은 `sessionStorage`

## 작업 방식 (Claude)
- 커밋하지 않는다. 변경은 코드 조각(파일명 + 바꿀 부분)으로 알려준다
- 수정 전에 GitHub 최신 코드를 다시 받아서 확인한다