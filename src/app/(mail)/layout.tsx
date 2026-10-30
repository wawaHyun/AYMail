
import { TopbarMenu } from '@/src/component/common/topbar';
import { SidebarMenu } from '@/src/component/common/sidebar';

export default function MailLayout({ children }: {children: React.ReactNode}) {
  return (
        <div className="flex h-dvh flex-col overflow-hidden">
      <div className="min-h-12 w-full shrink-0">
        <TopbarMenu />
      </div>

      <div className="flex min-h-0 flex-1">
        <div className="hidden w-60 shrink-0 overflow-y-auto md:block overflow-x-hidden border-r" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
          <SidebarMenu />
        </div>
        <div className="min-h-0 min-w-0 flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
