
import { scenarioListData } from '@/src/data/scenarios/scenario.data';
import { ScenarioThread } from './scenarioThread';

export async function ScenarioDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const mail = scenarioListData[id];
    if (!mail) return <div className="p-8">메일을 찾을 수 없습니다.</div>;
    return <ScenarioThread mail={mail} />;
}