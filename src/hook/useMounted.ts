import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

export function useMounted() {
    return useSyncExternalStore(
        subscribe,
        () => true,   // 클라이언트
        () => false,  // 서버 / hydration 중
    );
}