'use client'
import { ThreelineMenuButton, MaruiMenuButton, TopbarLogoButton } from "@/src/ui/button";
import { MyIcon } from "./myIcon";
import { useGlobalStateAction, useGlobalStateData } from "@/src/store/globalState.store";
import { useRouter } from "next/navigation";

export function TopbarMenu() {
    const globalState = useGlobalStateData()
    const globalAction = useGlobalStateAction()
    const router = useRouter();

    const handleTheme = () => {
        const nextTheme = globalState.theme === 'light' ? 'dark' : 'light';
        globalAction.update({ ...globalState, theme: nextTheme });
        document.documentElement.dataset.theme = nextTheme;
    }
    return (
        <header className="flex h-full items-center border-b px-4" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <ThreelineMenuButton style='mr-4'>☰</ThreelineMenuButton>

            <TopbarLogoButton onClick={()=>router.push('/mail')}/>

            <MaruiMenuButton>?</MaruiMenuButton>
            <MaruiMenuButton onClick={handleTheme}>{globalState.theme === 'light' ? '☾' : '☀'}</MaruiMenuButton>
            <MyIcon>U</MyIcon>
        </header>
    )
}