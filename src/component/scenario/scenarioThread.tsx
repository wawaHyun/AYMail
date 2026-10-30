'use client'

import type { IMail, IScenarioMail } from "@/src/model/mail.model";
import { MyIcon } from "../common/myIcon";
import { MailButton } from "@/src/ui/button";
import { useRouter } from "next/navigation";

export function ScenarioThread({ mail }: { mail: IScenarioMail }) {

    const router = useRouter();
    return (
        <div className="p-5 sm:p-8">
            <div className="mb-6 text-xl font-semibold sm:text-2xl">{mail.subject}</div>

            <div className="mb-8 flex items-center">
                <MyIcon style="mr-3">{mail.sender.charAt(0)}</MyIcon>
                <div>
                    <div className="text-sm font-semibold">{mail.sender}</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                        Scenario
                    </div>
                </div>
            </div>

            <div className="min-h-48 whitespace-pre-line text-sm leading-7">{mail.body}</div>
            <MailButton onClick={()=>router.push(mail.entry)}>시나리오 바로가기</MailButton>
        </div>
    );
}