'use client'
import { sidebarData } from "@/src/data/mail/sidebar";
import { SidebarButton } from "@/src/ui/button";

const sidebar = sidebarData;

export function SidebarMenu() {
    return (
        <div className="flex w-full h-full ">
            <aside className="w-full h-full border-r px-3 py-4 "
                style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                <button className="mb-5 flex h-12 w-36 items-center justify-center rounded-2xl text-sm font-semibold" 
                style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                    + Compose
                </button>
                <nav className="space-y-1 h-full ">
                    {sidebar.map((v) => (
                        <div key={v.id}>
                            <SidebarButton onClick={() => console.log('press sidebar', v.name)} icon={v.icon!} name={v.name!} select={v.state} unread={v.unread!} />
                        </div>
                    ))}
                </nav>
            </aside>
        </div>
    )
}
