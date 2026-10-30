'use client'

import { useState } from "react";
import type { IMail, IReplyOption } from "@/src/model/mail.model";
import { MailDetailToolbar } from "./mailDetailToolbar";
import { MailButton } from "@/src/ui/button";
import { MyIcon } from "../common/myIcon";
import { firLetterData } from "@/src/data/scenarios/firLetter.data";
import { useEndingAction } from "@/src/store/ending.store";
import { useMailAction, useMailData } from "@/src/store/mail.store";

export function MailThread({ mail }: { mail: IMail }) {
    const log = useMailData().find((l) => l.mailId === mail.id);
    const reply = useMailAction().reply;
    const { unlockEnding } = useEndingAction()
    const [replyOpen, setReplyOpen] = useState(false);

    const replies = mail.kind === 'firstletter' ? mail.replies : undefined;
    const handleReply = (opt: IReplyOption) => {
        // 다음 메일이 엔딩이면 도달하는 즉시 해금 (reply 안에서 reset이 일어나도 안전하도록 먼저)
        const next = opt.nextMailId ? firLetterData[opt.nextMailId] : undefined;
        if (next?.ending) unlockEnding(next.ending.key);

        reply(mail.id, opt);
    };

    return (
        <div className="p-5 sm:p-8">
            <div className="mb-6 text-xl font-semibold sm:text-2xl">{mail.subject}</div>

            <div className="mb-8 flex items-center">
                <MyIcon style="mr-3">{mail.sender.charAt(0)}</MyIcon>
                <div>
                    <div className="text-sm font-semibold">{mail.sender}</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        to me · {mail.time}
                    </div>
                </div>
            </div>

            <div className="min-h-48 whitespace-pre-line text-sm leading-7">{mail.body}</div>

            {log?.replyBody && (
                <div className="mt-8 border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
                    <div className="text-sm font-semibold">me → {mail.sender}</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{log.repliedAt}</div>
                    <div className="mt-3 text-sm leading-7">{log.replyBody}</div>
                </div>
            )}

            {replies && !log?.repliedWith && (
                <>
                    <MailDetailToolbar onReply={() => setReplyOpen(true)} />
                    {replyOpen && (
                        <div className="mt-3 flex flex-wrap gap-3">
                            {replies.map((opt) => (
                                <MailButton key={opt.type} select={opt.type === 'positive'}
                                    onClick={() =>handleReply(opt)}>
                                    {opt.label}
                                </MailButton>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}