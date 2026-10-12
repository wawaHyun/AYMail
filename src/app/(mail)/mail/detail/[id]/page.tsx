'use client'
import { MyIcon } from "@/src/component/mail/myIcon";
import { mailDummy } from "@/src/data/dummy";
import { useMailDetail } from "@/src/hooks/mail.hook";
import { MailButton } from "@/src/ui/button";
import { useRouter } from "next/navigation";

export default function MailDetailPage({ params }: { params:{ id: number } }) {
    // const router = useRouter();
//    const { id } = await params;
    // const mailId: number = Number(id);
    // const mail = mailDummy.find((mail) => mail.id === mailId);

    const {data:mailList} =useMailDetail(params.id);

    // const mail = mailDummy[id]

    const handleReply = (e: any) => {
        console.log('press handleReply')
    }
    const handleArchive = () => {
        console.log('press handleArchive')
    }
    const handleDelete = () => {
        console.log('press handleDelete')
    }
    return (
        <div className="min-w-0 w-full flex-1 p-2 sm:p-4">
            <div className="overflow-hidden rounded-2xl border shadow-sm" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                {mailList && (
                    <div className="p-5 sm:p-8">
                        <button onClick={() => console.log('press handleDelete')} className="mb-6 rounded-full px-4 py-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                            ← Back
                        </button>

                        <div className="mb-6 text-xl font-semibold sm:text-2xl">
                            {mailList.subject}
                        </div>

                        <div className="mb-8 flex items-center">

                            <MyIcon style="mr-3">{mailList.sender}</MyIcon>

                            <div>
                                <div className="text-sm font-semibold">{mailList.sender}</div>
                                <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                                    to me · {mailList.time}
                                </div>
                            </div>
                        </div>

                        <div className="min-h-48 text-sm leading-7" style={{ color: 'var(--color-text)' }}>
                            <div className="mb-5">{mailList.preview}</div>
                            <div>This message contains something important.</div>
                        </div>

                        {/* Game Actions */}
                        <div className="mt-8 flex flex-wrap gap-3 border-t pt-6" style={{ borderColor: 'var(--color-border)' }}>
                            <MailButton onClick={() => handleReply} select={true}>Reply</MailButton>
                            <MailButton onClick={() => handleArchive} select={false}>Archive</MailButton>
                            <MailButton onClick={() => handleDelete} select={false}>Delete</MailButton>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}