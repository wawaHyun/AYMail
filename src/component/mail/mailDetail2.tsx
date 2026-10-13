
import { MailDetailToolbar } from "@/src/component/mail/mailDetailToolbar";
import { MyIcon } from "@/src/component/mail/myIcon";
import { ScenarioList } from "@/src/data/mail/scenario";

export async function MailDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const mail = ScenarioList.find((m) => m.id === Number(id));

    if (!mail) return <div className="p-8">메일을 찾을 수 없습니다.</div>;

    return (
        <div className="p-5 sm:p-8">
            <div className="mb-6 text-xl font-semibold sm:text-2xl">{mail.subject}</div>
            <div className="mb-8 flex items-center">
                <MyIcon style="mr-3">{mail.sender?.charAt(0)}</MyIcon>
                <div>
                    <div className="text-sm font-semibold">{mail.sender}</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        to me · {mail.time}
                    </div>
                </div>
            </div>
            <div className="min-h-48 text-sm leading-7" style={{ color: 'var(--color-text)' }}>
                <div className="mb-5">{mail.preview}</div>
                <div>This message contains something important.</div>
            </div>
            <MailDetailToolbar />
        </div>
    );
}