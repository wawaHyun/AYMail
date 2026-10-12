import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';
import { IGlobalState } from '../model/globalState.model';

interface GlobalStateState {
    data: IGlobalState;
    action: {
        update: (data: IGlobalState) => void;
        clean: () => void;
    };
}

const useGlobalStateStore = create(persist<GlobalStateState>((set) => ({
    data: {
        theme: 'light',
        lang: 'ko',
        sound: true,
        music: true
    },
    action: {
        update: (data: IGlobalState) => set({ data }),
        clean: () => {
            set({
                data: {
                    theme: 'light',
                    lang: 'ko',
                    sound: true,
                    music: true
                }
            }); console.log("store.GlobalStateStore clean");
        }
    }
}),
    {
        name: 'GlobalState-storage',
        storage: createJSONStorage(() => sessionStorage)
    })
);

export const useGlobalStateAction = () => useGlobalStateStore((store) => store.action)
export const useGlobalStateData = () => useGlobalStateStore((store) => store.data)
export const useGlobalState = () => useGlobalStateStore.getState()