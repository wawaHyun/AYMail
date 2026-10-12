'use client'

export function MailToolbarMenu() {
    return (
        <div className="">
           <div className="flex h-14 items-center border-b px-3" style={{ borderColor: 'var(--color-border)' }}>
              <button className="flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ color: 'var(--color-text-muted)' }}>
                □
              </button>

              <button className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ color: 'var(--color-text-muted)' }}>
                ↻
              </button>

              <button className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-lg" style={{ color: 'var(--color-text-muted)' }}>
                ⋮
              </button>

              <div className="ml-auto text-xs" style={{ color: 'var(--color-text-muted)' }}>
                1–4 of 4
              </div>
            </div>
        </div>
    )}