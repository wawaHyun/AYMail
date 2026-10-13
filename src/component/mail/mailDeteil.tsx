import { MailThread } from "./mailThread";

export async function MailDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const mail = findScenarioMail(id);   // firstLetter[id]
    if (!mail) return <div className="p-8">메일을 찾을 수 없습니다.</div>;
    return <MailThread mail={mail} />;
}