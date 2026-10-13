'use client'

import { IScenarioMail } from "@/src/model/scenario.model";
import { useMailStore } from "@/src/store/mail.store";
import { useState } from "react";
import { MailDetailToolbar } from "./mailDetailToolbar";
import { MailButton } from "@/src/ui/button";

export function MailThread({ mail }: { mail: IScenarioMail }) {
    const log = useMailStore((s) => s.logs.find((l) => l.mailId === mail.id));
    const reply = useMailStore((s) => s.reply);
    const [replyOpen, setReplyOpen] = useState(false);

    return (
        <div className="p-5 sm:p-8">
            {/* 기존 헤더/본문 UI */}

            {/* 내가 보낸 답장 — 메일 형태로 기록 */}
            {log?.replyBody && (
                <div className="mt-8 border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
                    <div className="text-sm font-semibold">me → {mail.sender}</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{log.repliedAt}</div>
                    <div className="mt-3 text-sm leading-7">{log.replyBody}</div>
                </div>
            )}

            {/* 답장 가능한 메일 + 아직 답장 안 했을 때만 */}
            {mail.replies && !log?.repliedWith && (
                <>
                    <MailDetailToolbar onReply={() => setReplyOpen(true)} />
                    {replyOpen && (
                        <div className="mt-4 flex gap-3">
                            {mail.replies.map((opt) => (
                                <MailButton key={opt.type} select={opt.type === 'positive'}
                                    onClick={() => reply(mail.id, opt)}>
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