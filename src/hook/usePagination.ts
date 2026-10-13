import { useState } from 'react';

export function usePagination<T>(items: T[], pageSize: number) {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const current = Math.min(page, totalPages); // 항목이 줄어도 범위를 벗어나지 않음
  const pageItems = items.slice((current - 1) * pageSize, current * pageSize);

  return { page: current, setPage, pageItems, totalPages };
}