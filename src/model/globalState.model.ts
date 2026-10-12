export interface IGlobalState {
  theme: 'light' | 'dark',
  lang: 'ko' | 'en', //번역 기능이 아니라 번역 기능이 어떤 언어를 사용할지 결정하는 상태
  sound: boolean,
  music: boolean,
}