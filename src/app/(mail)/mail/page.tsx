'use client';

import { mailDummy } from '@/src/data/dummy';
import { MailToolbarMenu } from '@/src/component/mailToolbar'
import { BottomMenu } from '@/src/component/mail/bottombar';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const mails = mailDummy;

  return (
    <main className="h-full w-full flex-col " style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
        <div className="min-w-0 w-full flex-1 p-2 sm:p-4 ">
          <div className="overflow-hidden rounded-2xl border shadow-sm" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <MailToolbarMenu />

                {mails.map((mail) => (
                  <button
                    key={mail.id}
                    onClick={() => router.push(`/mail/detail/${mail.id}`)}
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
        </div>

      <BottomMenu></BottomMenu>
    </main>
  );
}