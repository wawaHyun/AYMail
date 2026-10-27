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
- model파일들에 적힌 주석내용을 최우선한다

## 시나리오 데이터
- 컴포넌트와 페이지는 특정 시나리오(`firstLetter` 등)를 직접 import하지 않고 `registry.ts`만 통해 접근한다

## 스토어
- 상태는 `data`, 동작은 `action` 객체에 둔다
- 화면에서는 `use...Data`, `use...Action`만 쓰고, 컴포넌트 밖에서는 `get...State`를 쓴다
- 남겨야 하는 것(엔딩 수집, 메일 진행)은 `localStorage`, 세션 한정(테마)은 `sessionStorage`