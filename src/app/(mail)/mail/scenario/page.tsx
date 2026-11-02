"use client";

import { BottomMenu } from "@/src/component/common/bottombar";
import { MailListToolbarMenu } from "@/src/component/mail/mailListToolbar";
import { scenarioListData } from "@/src/data/scenarios/scenario.data";
import { useRouter } from "next/navigation";

export default function ScenarioPage() {
    const router = useRouter();
    const scenario = Object.values(scenarioListData);

    if (!scenario) {
        return (
            <div className="flex flex-col items-start gap-4 p-6">
                <span>진행할수 있는 시나리오가 없습니다. </span>
            </div>
        );
    }

    return (
     <main className="h-full w-full flex-col" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
           <div className="min-w-0 w-full flex-1 p-2 sm:p-4">
             <div className="overflow-hidden rounded-2xl border shadow-sm" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
               <MailListToolbarMenu />
     
               {scenario.map((mail) => (
                 <button
                   key={mail.id}
                   onClick={() => router.push(`/mail/starred/${mail.id}`)}
                   className="flex h-8 w-full items-center border-b px-2 text-left text-xs transition hover:opacity-80 sm:h-10 sm:px-3 sm:text-sm md:h-12 md:px-4"
                   style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                 >
                   <span className="hidden w-10 shrink-0 text-center sm:block text-lg" style={{ color: 'var(--color-text-muted)' }}>□</span>
                   <span className="hidden w-10 shrink-0 text-center sm:block " style={{ color: 'var(--color-text-muted)' }}>☆</span>
     
                   <span className="w-24 shrink-0 truncate text-sm">{mail.sender}</span>
     
                   <span className="min-w-0 flex-1 truncate text-sm">
                     {mail.subject}
                     <span className="hidden font-normal sm:inline" style={{ color: 'var(--color-text-muted)' }}>
                       {' — '}{mail.preview}
                     </span>
                   </span>
     
                   <span className="ml-3 shrink-0 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                     {mail.time}
                   </span>
                 </button>
               ))}
     
             </div>
           </div>
     
           <BottomMenu />
         </main>
    );
}