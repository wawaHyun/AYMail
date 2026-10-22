'use client'

import { MailListToolbarMenu } from '@/src/component/mail/mailListToolbar'
import { BottomMenu } from '@/src/component/mail/bottombar';
import { useRouter } from 'next/navigation';
import { usePagination } from '@/src/hook/usePagination';
import { Pagination } from '@/src/component/common/pagination';
import { firstLetter } from '@/src/data/mail/firLetter.data';
import { useMounted } from '@/src/hook/useMounted';
import { useEndingData } from '@/src/store/ending.store';

const PAGE_SIZE = 15;

export default function EndingListPage() {
    const router = useRouter();
    const allEndings = Object.values(firstLetter).filter((m) => m.ending);
    const { unlockedEndings } = useEndingData();
    const mounted = useMounted();
    const { page, setPage, pageItems } = usePagination(allEndings, PAGE_SIZE);


//test. all Ending List
// const endingAct = useEndingAction();

// useEffect(() => {
//     if (process.env.NODE_ENV !== 'development') return;
//     allEndings.forEach((m) => endingAct.unlockEnding(m.ending!.key));
// }, []);

    return (
        <main className="h-full w-full flex-col" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
            <div className="min-w-0 w-full flex-1 p-2 sm:p-4">
                <div className="overflow-hidden rounded-2xl border shadow-sm" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                    <MailListToolbarMenu />

                    {pageItems.map((mail) => {
                        const unlocked = mounted && unlockedEndings.includes(mail.ending!.key);

                        return (
                            <button
                                key={mail.id}
                                disabled={!unlocked}
                                onClick={() => router.push(`/mail/detail/${mail.id}`)}
                                className="flex h-8 w-full items-center border-b px-2 text-left text-xs transition hover:opacity-80 disabled:cursor-default disabled:hover:opacity-100 sm:h-10 sm:px-3 sm:text-sm md:h-12 md:px-4"
                                style={{
                                    borderColor: 'var(--color-border)',
                                    color: unlocked ? 'var(--color-text)' : 'var(--color-text-muted)',
                                }}
                            >
                                <span className="hidden w-10 shrink-0 text-center sm:block text-lg" style={{ color: 'var(--color-text-muted)' }}>□</span>
                                <span className="hidden w-10 shrink-0 text-center sm:block" style={{ color: 'var(--color-text-muted)' }}>☆</span>

                                <span className="w-24 shrink-0 truncate text-sm">
                                    {unlocked ? mail.sender : '???'}
                                </span>

                                <span className="min-w-0 flex-1 truncate text-sm">
                                    {unlocked ? mail.ending!.title : '아직 발견하지 못한 엔딩'}
                                    {unlocked && (
                                        <span className="hidden font-normal sm:inline" style={{ color: 'var(--color-text-muted)' }}>
                                            {' — '}{mail.preview}
                                        </span>
                                    )}
                                </span>

                                <span className="ml-3 shrink-0 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                    {unlocked ? mail.time : ''}
                                </span>
                            </button>
                        );
                    })}

                    <Pagination page={page} totalItems={allEndings.length} pageSize={PAGE_SIZE} onPageChange={setPage} />
                </div>
            </div>

            <BottomMenu />
        </main>
    );
}