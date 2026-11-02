
export function MailListToolbarMenu() {
  return (
    <div className="flex h-14 items-center border-b px-2 sm:px-3 md:px-4" style={{ borderColor: 'var(--color-border)' }}>
      <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg" style={{ color: 'var(--color-text-muted)' }}>
        □
      </button>

      <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg" style={{ color: 'var(--color-text-muted)' }}>
        ↻
      </button>

      <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg" style={{ color: 'var(--color-text-muted)' }}>
        ⋮
      </button>

      <div className="ml-auto text-xs" style={{ color: 'var(--color-text-muted)' }}>
        1–4 of 4
      </div>
    </div>
  )
}