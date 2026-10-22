'use client'
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { IMailLog, IReplyOption } from '../model/mail.model';
import { getEndingState } from './ending.store';

interface MailState {
    data: IMailLog[];
    action: {
        reply: (mailId: string, option: IReplyOption) => void;
        reset: () => void;
    };
}

const createStartLog = (): IMailLog => ({
    mailId: 'fl-01',
    receivedAt: new Date().toISOString(),
});
const TUTORIAL_CLEAR_KEY = 'fl-success';

const isTutorialDone = () =>
    getEndingState().data.unlockedEndings.includes(TUTORIAL_CLEAR_KEY);

const createStartLogs = (): IMailLog[] =>
    isTutorialDone() ? [] : [{ mailId: 'fl-01', receivedAt: new Date().toISOString() }];

const useMailStore = create(persist<MailState>((set) => ({
    data: [createStartLog()],
    action: {
        reply: (mailId: string, option: IReplyOption) =>
            set((s) => {
                const now = new Date().toISOString();
                const updated = s.data.map((l) =>
                    l.mailId === mailId
                        ? { ...l, repliedWith: option.type, replyBody: option.replyBody, repliedAt: now }
                        : l
                );
                // 다음 메일 도착
                if (option.nextMailId && !updated.some((l) => l.mailId === option.nextMailId)) {
                    updated.push({ mailId: option.nextMailId, receivedAt: now });
                }
                return { data: updated };
            }),
        reset: () => {
            set({ data: createStartLogs() });
            console.log("store.MailStore reset");
        }
    }
}),
    {
        name: 'mail-progress',
        storage: createJSONStorage(() => localStorage),
    })
);

export const useMailAction = () => useMailStore((store) => store.action)
export const useMailData = () => useMailStore((store) => store.data)
export const getMailState = () => useMailStore.getState()