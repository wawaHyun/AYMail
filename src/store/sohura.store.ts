'use client'
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { ISohuraEventChoice, ISohuraStats } from '../model/sohura.model';

export interface ISohuraStoreData {
    stats: ISohuraStats;
    skipCount: number;
    answeredIds: string[];
}

interface SohuraStoreState {
    data: ISohuraStoreData;
    action: {
        answer: (mailId: string, choice: ISohuraEventChoice) => void;
        reset: () => void;
    };
}

const SOHURA_EVENT_POINT = 2;

const createSohuraData = (): ISohuraStoreData => ({
    stats: { literal: 0, kind: 0, bold: 0 },
    skipCount: 0,
    answeredIds: [],
});

const addSohuraStat = (stats: ISohuraStats, choice: ISohuraEventChoice): ISohuraStats => {
    if (!choice.stat) return stats;
    return { ...stats, [choice.stat]: stats[choice.stat] + SOHURA_EVENT_POINT };
};

const useSohuraStore = create(persist<SohuraStoreState>((set) => ({
    data: createSohuraData(),
    action: {
        answer: (mailId, choice) =>
            set((s) => {
                const { stats, skipCount, answeredIds } = s.data;
                if (answeredIds.includes(mailId)) return s;
                return {
                    data: {
                        stats: addSohuraStat(stats, choice),
                        skipCount: choice.skip ? skipCount + 1 : skipCount,
                        answeredIds: [...answeredIds, mailId],
                    },
                };
            }),
        reset: () => {
            set({ data: createSohuraData() });
            console.log("store.SohuraStore reset");
        },
    }
}),
    {
        name: 'sohura-progress',
        storage: createJSONStorage(() => localStorage),
    })
);

export const useSohuraAction = () => useSohuraStore((store) => store.action)
export const useSohuraData = () => useSohuraStore((store) => store.data)
export const getSohuraState = () => useSohuraStore.getState()