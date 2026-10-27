"use client";

import { OPEN_SCENARIO_IDS, scenarioListData } from "@/src/data/menu/scenario.data";
import { useParams, useRouter } from "next/navigation";

export default function ScenarioPage() {
    const router = useRouter();
    const { id } = useParams<{ id: string }>();
    const scenario = scenarioListData[id];

    const handleBack = () => router.push("/mail/starred");

    if (!scenario) {
        return (
            <div className="flex flex-col items-start gap-4 p-6">
                <span>존재하지 않는 시나리오입니다.</span>
                <button
                    onClick={handleBack}
                    className="text-sm underline"
                >
                    목록으로
                </button>
            </div>
        );
    }

    const isOpen = OPEN_SCENARIO_IDS.includes(scenario.id);

    const handleStart = () => {
        // TODO: registry.ts의 기존 시작 방식으로 교체 (첫 메일로 이동 등)
    };

    return (
        <div className="mx-auto flex max-w-2xl flex-col gap-6 p-6">
            <button
                onClick={handleBack}
                className="w-fit text-sm opacity-70 hover:opacity-100"
            >
                ← 게임 목록
            </button>

            <div className="flex flex-col gap-2 border-b pb-4">
                <span className="text-xs opacity-60">
                    From. 우체부
                </span>
                <div className="text-2xl font-bold">
                    {scenario.subject}
                </div>
            </div>

            <div className="whitespace-pre-line leading-relaxed">
                {scenario.body}
            </div>

            <div className="flex items-center gap-3 pt-2">
                {isOpen ? (
                    <button
                        onClick={handleStart}
                        className="rounded-md bg-black px-5 py-2
                            text-white hover:opacity-80"
                    >
                        시작하기
                    </button>
                ) : (
                    <span className="rounded-md border px-5 py-2
                        text-sm opacity-60">
                        준비 중
                    </span>
                )}
            </div>
        </div>
    );
}