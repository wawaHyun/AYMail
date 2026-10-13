'use client'
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IMailLog, IReplyOption } from '../model/mail.model';

interface IMailStore {
  logs: IMailLog[];
  reply: (mailId: string, option: IReplyOption) => void;
  reset: () => void;
}

export const useMailStore = create<IMailStore>()(
  persist(
    (set) => ({
      logs: [{ mailId: 'fl-01', receivedAt: '09:00' }], // 시작 메일
      reply: (mailId, option) =>
        set((s) => {
          const now = new Date().toISOString();
          const updated = s.logs.map((l) =>
            l.mailId === mailId
              ? { ...l, repliedWith: option.type, replyBody: option.replyBody, repliedAt: now }
              : l
          );
          // 다음 메일 도착
          if (option.nextMailId && !updated.some((l) => l.mailId === option.nextMailId)) {
            updated.push({ mailId: option.nextMailId, receivedAt: now });
          }
          return { logs: updated };
        }),
      reset: () => set({ logs: [{ mailId: 'fl-01', receivedAt: '09:00' }] }),
    }),
    { name: 'mail-progress' }
  )
);