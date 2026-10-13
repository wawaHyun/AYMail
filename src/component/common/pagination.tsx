'use client'

interface IPagination {
  page: number;                    // 현재 페이지 (1부터)
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  showNumbers?: boolean;           // 번호 버튼 표시 여부
}

export function Pagination({ page, totalItems, pageSize, onPageChange, showNumbers = false }: IPagination) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const current = Math.min(Math.max(page, 1), totalPages);
  const start = (current - 1) * pageSize;
  const end = Math.min(start + pageSize, totalItems);

  return (
    <nav
      aria-label="페이지 이동"
      className="flex items-center justify-end gap-3 px-4 py-3 text-xs"
      style={{ color: 'var(--color-text-muted)' }}>
      <span>
        {totalItems === 0 ? 0 : start + 1}–{end} / {totalItems}
      </span>

      <button
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
        aria-label="이전 페이지"
        className="rounded px-2 py-1 transition hover:opacity-70 disabled:opacity-30 disabled:hover:opacity-30">
        ‹
      </button>

      {showNumbers &&
        Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => onPageChange(n)}
            aria-current={n === current ? 'page' : undefined}
            className={`rounded px-2 py-1 transition hover:opacity-70 ${n === current ? 'font-semibold' : ''}`}
            style={n === current ? { color: 'var(--color-primary)' } : undefined}>
            {n}
          </button>
        ))}

      <button
        onClick={() => onPageChange(current + 1)}
        disabled={current === totalPages}
        aria-label="다음 페이지"
        className="rounded px-2 py-1 transition hover:opacity-70 disabled:opacity-30 disabled:hover:opacity-30">
        ›
      </button>
    </nav>
  );
}