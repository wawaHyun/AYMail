'use client'
import { MailButton } from "@/src/ui/button";

interface IMailDetailToolbar {
    onReply?: () => void,
}

export function MailDetailToolbar({onReply}:IMailDetailToolbar) {

    return (
        <div className="mt-8 flex flex-wrap gap-3 border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
            <MailButton onClick={onReply} select={true}>Reply</MailButton>
            <MailButton select={false}>Archive</MailButton>
            <MailButton select={false}>Print</MailButton>
            <MailButton select={false}>Delete</MailButton>
        </div>
    )
};