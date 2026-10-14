'use client'
import { ThreelineMenuButton, MaruiMenuButton, TopbarLogoButton } from "@/src/ui/button";
import { MyIcon } from "./myIcon";
import { useGlobalStateAction, useGlobalStateData } from "@/src/store/globalState.store";
import { useRouter } from "next/navigation";
import { useMailStore } from "@/src/store/mail.store";
import { useEndingAction } from "@/src/store/ending.store";

export function TopbarMenu() {
    const globalState = useGlobalStateData()
    const globalAction = useGlobalStateAction()
    const router = useRouter();
    const restart = useMailStore((s) => s.reset);
    const reset = useEndingAction().clean;

    const handleTheme = () => {
        const nextTheme = globalState.theme === 'light' ? 'dark' : 'light';
        globalAction.update({ ...globalState, theme: nextTheme });
        document.documentElement.dataset.theme = nextTheme;
    }
    const handleRestart = () => {
        restart();
        router.push('/mail');
    };
        const handleReset = () => {
        if (!window.confirm('모든 진행을 초기화하시겠습니까?')) return;
        restart();
        reset();
        router.push('/mail');
    };
    return (
        <header className="flex h-full items-center border-b px-4" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
            <ThreelineMenuButton style='mr-4'>☰</ThreelineMenuButton>

            <TopbarLogoButton onClick={() => router.push('/')} />

            <MaruiMenuButton>?</MaruiMenuButton>
            <MaruiMenuButton onClick={handleRestart}>↻</MaruiMenuButton>
            <MaruiMenuButton onClick={handleReset}>Re</MaruiMenuButton>
            <MaruiMenuButton onClick={handleTheme}>{globalState.theme === 'light' ? '☾' : '☀'}</MaruiMenuButton>
            <MyIcon>U</MyIcon>
        </header>
    )
}