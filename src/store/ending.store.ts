import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';

export interface IEndingState {
    currentEndingId: string | null; // 현재 열려 있는 메일
    readEndingIds: string[];        // 이번 플레이에서 읽은 메일
    unlockedEndings: string[];    // 해금한 엔딩 key (reset 해도 유지)
}

interface EndingState {
    data: IEndingState;
    action: {
        openEnding: (mailId: string) => void;
        unlockEnding: (key: string) => void;
        reset: () => void; // 진행 상태만 초기화 (엔딩 모음은 유지)
        clean: () => void; // 엔딩 모음까지 전부 초기화
    };
}

const initialProgress = {
    currentEndingId: null,
    readEndingIds: [],
};

const useEndingStore = create(persist<EndingState, [], [], Pick<EndingState, 'data'>>((set) => ({
    data: {
        ...initialProgress,
        unlockedEndings: [],
    },
    action: {
        openEnding: (mailId: string) => set((s) => ({
            data: {
                ...s.data,
                currentEndingId: mailId,
                readEndingIds: s.data.readEndingIds.includes(mailId)
                    ? s.data.readEndingIds
                    : [...s.data.readEndingIds, mailId],
            }
        })),
        unlockEnding: (key: string) => set((s) => ({
            data: {
                ...s.data,
                unlockedEndings: s.data.unlockedEndings.includes(key)
                    ? s.data.unlockedEndings
                    : [...s.data.unlockedEndings, key],
            }
        })),
        reset: () => {
            set((s) => ({
                data: {
                    ...initialProgress,
                    unlockedEndings: s.data.unlockedEndings,
                }
            })); console.log("store.EndingStore reset");
        },
        clean: () => {
            set({
                data: {
                    ...initialProgress,
                    unlockedEndings: [],
                }
            }); console.log("store.EndingStore clean");
        }
    }
}),
    {
        name: 'Ending-storage',
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ data: state.data }),
        merge: (persisted, current) => ({
            ...current,
            data: {
                ...current.data,
                ...(persisted as Partial<EndingState>)?.data,
            },
        }),
    }
)
);

export const useEndingAction = () => useEndingStore((store) => store.action)
export const useEndingData = () => useEndingStore((store) => store.data)
export const useEndingState = () => useEndingStore.getState()
