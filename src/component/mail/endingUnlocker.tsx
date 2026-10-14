'use client'

import { use, useEffect } from 'react';
import { useEndingAction } from '@/src/store/ending.store';
import { firstLetter } from '@/src/data/mail/firLetter.data';

export function EndingUnlocker({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const { unlockEnding } = useEndingAction();

    const endingKey = firstLetter[id]?.ending?.key;

    useEffect(() => {
        if (endingKey) unlockEnding(endingKey);
    }, [endingKey, unlockEnding]);

    return null;
}