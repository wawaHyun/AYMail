'use client'
import { mailMenuBottomData } from "@/src/data/menu/mailMenu";
import { BottombarButton } from "@/src/ui/button";

export function BottomMenu() {
    const menulist = mailMenuBottomData;
    return (
        <nav className="fixed bottom-0 left-0 right-0 flex h-16 items-center justify-around border-t md:hidden" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            {menulist.map((v) => (
                <div key={v.id}>
                    <BottombarButton onClick={() => console.log('press sidebar', v.name)} icon={v.icon!} select={v.state} />
                </div>
            ))}
        </nav>
    )
};