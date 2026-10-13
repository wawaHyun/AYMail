'use client'
import { MailButton } from "@/src/ui/button";

interface IMailDetailToolbar {
    onReply?: () => void,
    archive?: () => void,
    print?: () => void,
    deletee?: () => void,
}

export function MailDetailToolbar({onReply, archive, print, deletee}:IMailDetailToolbar) {

    const handleReply = () => {
        console.log('press handleReply')
    }
    const handleArchive = () => {
        console.log('press handleArchive')
    }
    const handlePrint = () => {
        console.log('press handlePrint')
    }
    const handleDelete = () => {
        console.log('press handleDelete')
    }

    return (
        <div className="mt-8 flex flex-wrap gap-3 border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
            <MailButton onClick={handleReply} select={true}>Reply</MailButton>
            <MailButton onClick={handleArchive} select={false}>Archive</MailButton>
            <MailButton onClick={handlePrint} select={false}>Print</MailButton>
            <MailButton onClick={handleDelete} select={false}>Delete</MailButton>
        </div>
    )
};