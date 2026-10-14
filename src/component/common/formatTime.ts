const formatClock = (iso: string): string => {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso; // 예전 '09:00' 같은 값 방어
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
};

/**
 * time이 있으면(예: fl-01의 '99:99') 연출용 고정값을 그대로 쓰고,
 * 없으면 도착 시각(receivedAt)을 HH:mm으로 변환한다.
 */
export const formatTime = (time: string | undefined, receivedAt: string): string =>
  time ?? formatClock(receivedAt);