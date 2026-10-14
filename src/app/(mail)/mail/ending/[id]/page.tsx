import { MailDetail } from '@/src/component/mail/mailDetail';
import { Suspense } from 'react';

export default function EndingDetailPage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <div className="min-w-0 w-full flex-1 p-2 sm:p-4">
            <div className="overflow-hidden rounded-2xl border shadow-sm"
                style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <Suspense fallback={<div className="p-8">불러오는 중...</div>}>
                    <MailDetail params={params} />
                </Suspense>
            </div>
        </div>
    );
}