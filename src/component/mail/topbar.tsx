'use client'
import { ThreelineMenuButton, MaruiMenuButton } from "@/src/ui/button";
import { MyIcon } from "./myIcon";
import { useGlobalStateAction, useGlobalStateData } from "@/src/store/globalState.store";

export function TopbarMenu() {
    const globalState = useGlobalStateData()
    const globalAction = useGlobalStateAction()

    const handleTheme = () => {
        const nextTheme = globalState.theme === 'light' ? 'dark' : 'light';
        globalAction.update({ ...globalState, theme: nextTheme });
        document.documentElement.dataset.theme = nextTheme;
    };
//     console.log('globalState:', globalState);
// console.log('globalAction:', globalAction);
// console.log('update:', globalAction.update);


    return (
        <header className="flex h-full items-center border-b px-4" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <ThreelineMenuButton style='mr-4'>☰</ThreelineMenuButton>

            <div className="mr-auto text-xl font-semibold tracking-tight" style={{ color: 'var(--color-primary)' }}>
                AYMail
            </div>

            <MaruiMenuButton>?</MaruiMenuButton>
            <MaruiMenuButton onClick={handleTheme}>{globalState.theme === 'light' ? '☾' : '☀'}</MaruiMenuButton>
            <MyIcon>U</MyIcon>
        </header>
    )
}