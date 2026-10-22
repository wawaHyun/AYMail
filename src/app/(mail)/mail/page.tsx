'use client'

import { BottomMenu } from '@/src/component/mail/bottombar';
import { useRouter } from 'next/navigation';

import { usePagination } from '@/src/hook/usePagination';
import { Pagination } from '@/src/component/common/pagination';
import { mailRegistry } from '@/src/data/mail/registry';
import { workMails } from '@/src/data/mail/workMails';
import type { IMail } from '@/src/model/mail.model';
import { useMailData } from '@/src/store/mail.store';
import { MailListToolbarMenu } from '@/src/component/mail/mailListToolbar';

const PAGE_SIZE = 15;

export default function MailListPage() {
  const router = useRouter();
  const logs = useMailData();

  const scenarioMails = logs
    .map((l) => mailRegistry[l.mailId])
    .filter((m): m is IMail => m !== undefined)
    .reverse();
  const mails: IMail[] = [...scenarioMails, ...Object.values(workMails)];

  const { page, setPage, pageItems } = usePagination(mails, PAGE_SIZE);

  return (
    <main className="h-full w-full flex-col" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
      <div className="min-w-0 w-full flex-1 p-2 sm:p-4">
        <div className="overflow-hidden rounded-2xl border shadow-sm" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
          <MailListToolbarMenu />

          {pageItems.map((mail) => (
            <button
              key={mail.id}
              onClick={() => router.push(`/mail/detail/${mail.id}`)}
              className="flex h-8 w-full items-center border-b px-2 text-left text-xs transition hover:opacity-80 sm:h-10 sm:px-3 sm:text-sm md:h-12 md:px-4"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
            >
              <span className="hidden w-10 shrink-0 text-center sm:block text-lg" style={{ color: 'var(--color-text-muted)' }}>□</span>
              <span className="hidden w-10 shrink-0 text-center sm:block " style={{ color: 'var(--color-text-muted)' }}>☆</span>

              <span className="w-24 shrink-0 truncate text-sm">{mail.sender}</span>

              <span className="min-w-0 flex-1 truncate text-sm">
                {mail.subject}
                <span className="hidden font-normal sm:inline" style={{ color: 'var(--color-text-muted)' }}>
                  {' — '}{mail.preview}
                </span>
              </span>

              <span className="ml-3 shrink-0 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                {mail.time}
              </span>
            </button>
          ))}

          <Pagination page={page} totalItems={mails.length} pageSize={PAGE_SIZE} onPageChange={setPage} />
        </div>
      </div>

      <BottomMenu />
    </main>
  );
}