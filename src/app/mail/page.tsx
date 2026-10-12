'use client';

import { mailDummy } from '@/src/data/dummy';
import { useState } from 'react';
import { MailToolbarMenu } from '@/src/component/mailToolbar';
import { TopbarMenu } from '@/src/component/mail/topbar';
import { SidebarMenu } from '@/src/component/mail/sidebar';

export default function Home() {
  const [selectedMail, setSelectedMail] = useState<number | null>(null);

  const mails = mailDummy;


  const mail = mails.find((mail) => mail.id === selectedMail);

  return (
    <main className="h-full flex-col" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
      <div className="top-0 h-[7%] min-h-12"><TopbarMenu /></div>
      <div className="h-[93%] flex">
        <div className="top-0 hidden w-60 shrink-0 h-full md:block "><SidebarMenu /></div>
        <section className="min-w-0 flex-1 p-2 sm:p-4 ">
          <div className="overflow-hidden rounded-2xl border shadow-sm" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <MailToolbarMenu />

            {/* Mail List */}
            {!mail && (
              <div>
                {mails.map((mail) => (
                  <button
                    key={mail.id}
                    onClick={() => setSelectedMail(mail.id)}
                    className="flex min-h-16 w-full items-center border-b px-3 text-left transition hover:opacity-80 sm:px-4"
                    style={{
                      backgroundColor: mail.unread ? 'var(--color-surface)' : 'var(--color-background)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)'
                    }}
                  >
                    <span className="mr-3 hidden sm:block" style={{ color: 'var(--color-text-muted)' }}>
                      □
                    </span>

                    <span className="mr-3 hidden sm:block" style={{ color: 'var(--color-text-muted)' }}>
                      ☆
                    </span>

                    <span className={`w-24 shrink-0 truncate text-sm ${mail.unread ? 'font-semibold' : ''}`}>
                      {mail.sender}
                    </span>

                    <span className={`min-w-0 flex-1 truncate text-sm ${mail.unread ? 'font-semibold' : ''}`}>
                      {mail.subject}
                      <span className="hidden font-normal sm:inline" style={{ color: 'var(--color-text-muted)' }}>
                        {' — '}
                        {mail.preview}
                      </span>
                    </span>

                    <span className="ml-3 shrink-0 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      {mail.time}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Mail Detail */}
            {mail && (
              <div className="p-5 sm:p-8">
                <button onClick={() => setSelectedMail(null)} className="mb-6 rounded-full px-4 py-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  ← Back
                </button>

                <div className="mb-6 text-xl font-semibold sm:text-2xl">
                  {mail.subject}
                </div>

                <div className="mb-8 flex items-center">
                  <div className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-semibold" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                    {mail.sender[0]}
                  </div>

                  <div>
                    <div className="text-sm font-semibold">{mail.sender}</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      to me · {mail.time}
                    </div>
                  </div>
                </div>

                <div className="min-h-48 text-sm leading-7" style={{ color: 'var(--color-text)' }}>
                  <div className="mb-5">{mail.preview}</div>
                  <div>This message contains something important.</div>
                </div>

                {/* Game Actions */}
                <div className="mt-8 flex flex-wrap gap-3 border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
                  <button className="rounded-full border px-5 py-2.5 text-sm font-medium" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                    Reply
                  </button>

                  <button className="rounded-full border px-5 py-2.5 text-sm font-medium" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
                    Archive
                  </button>

                  <button className="rounded-full border px-5 py-2.5 text-sm font-medium" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 flex h-16 items-center justify-around border-t md:hidden" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
        <button className="flex flex-col items-center text-xs" style={{ color: 'var(--color-primary)' }}>
          <span className="mb-1 text-lg">▣</span>
          Inbox
        </button>

        <button className="flex flex-col items-center text-xs" style={{ color: 'var(--color-text-muted)' }}>
          <span className="mb-1 text-lg">★</span>
          Starred
        </button>

        <button className="flex flex-col items-center text-xs" style={{ color: 'var(--color-text-muted)' }}>
          <span className="mb-1 text-lg">➤</span>
          Sent
        </button>

        <button className="flex flex-col items-center text-xs" style={{ color: 'var(--color-text-muted)' }}>
          <span className="mb-1 text-lg">☰</span>
          More
        </button>
      </nav>
    </main>
  );
}