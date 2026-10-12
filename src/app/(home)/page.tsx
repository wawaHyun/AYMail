'use client';

import { WhiteInputbox } from "@/src/ui/inputbox";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/mail')
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-6" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <span className="block text-3xl font-semibold" style={{ color: 'var(--color-primary)' }}>AYMail</span>
          <span className="mt-2 block text-sm" style={{ color: 'var(--color-text-muted)' }}>Accept Your Mail</span>
        </div>

        <div className="rounded-xl border p-6 shadow-sm" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium" htmlFor="id">ID</label>
            <WhiteInputbox placeholder="Enter your ID" name="id" type="text"/>
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium" htmlFor="password">Password</label>
            <WhiteInputbox placeholder="Enter your password" name="pw" type="password"/>
            </div>

          <button onClick={handleLogin} className="h-11 w-full rounded-lg text-sm font-medium transition hover:opacity-90" style={{ backgroundColor: 'var(--color-primary)', color: '#ffffff' }}>Login</button>
        </div>

        <div className="mt-6 text-center">
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Accept Your Mail</span>
        </div>
      </div>
    </main>
  );
}