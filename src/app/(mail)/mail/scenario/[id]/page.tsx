
import { Suspense } from 'react';
import { ScenarioDetail } from '@/src/component/scenario/scenarioDetail';

export default function StarredDetailPage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <div className="min-w-0 w-full flex-1 p-2 sm:p-4">
            <div className="overflow-hidden rounded-2xl border shadow-sm"
                style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <Suspense fallback={<div className="p-8">불러오는 중...</div>}>
                    <ScenarioDetail params={params} />
                </Suspense>
            </div>
        </div>
    );
}