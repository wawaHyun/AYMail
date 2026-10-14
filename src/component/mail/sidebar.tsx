'use client'
import { mailMenuData } from "@/src/data/menu/mailMenu";
import { SidebarButton } from "@/src/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";


export function SidebarMenu() {
    const menulist = mailMenuData;
    const router = useRouter();
    const [selectedId, setSelectedId] = useState<number | undefined>(
        menulist.find((v) => v.state)?.id ?? menulist[0]?.id
    );

    const handleSidebar = (id?: number,url?:string) => {
        setSelectedId(id);
        router.push(`${url}`);
    };

    return (
        <div className="flex w-full ">
            <aside className="w-full h-full px-3 py-4">
                <button className="mb-5 flex h-12 w-36 items-center justify-center rounded-2xl text-sm font-semibold"
                    style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                    + Compose
                </button>
                <nav className="space-y-1 h-full ">
                    {menulist.map((v) => (
                        <div key={v.id}>
                            <SidebarButton onClick={() => handleSidebar(v.id,v.url)} icon={v.icon!} name={v.script} select={v.id === selectedId} unread={v.unread!}>{v.name}</SidebarButton>
                        </div>
                    ))}
                </nav>
            </aside>
        </div>
    )
}
