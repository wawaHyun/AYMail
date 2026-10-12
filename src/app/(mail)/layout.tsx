
import { TopbarMenu } from '@/src/component/mail/topbar';
import { SidebarMenu } from '@/src/component/mail/sidebar';

export default function MailLayout({ children }: {children: React.ReactNode}) {
  return (
        <div className="h-full overflow-hidden">
            <div className="min-h-12 h-[7vh] w-full shrink-0"><TopbarMenu /></div>
            <div className="flex h-full ">
                <div className="top-0 hidden w-60 shrink-0 h-full md:block "><SidebarMenu /></div>
                <div className='w-full'>{children}</div>
            </div>
        </div>
  );
}
