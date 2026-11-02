'use client';

import { useCookieStore } from "./cookie.store";


export default function CookieStats() {
  const { cookies, clickPower } = useCookieStore();

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-4xl font-bold">{cookies.toLocaleString()}</div>
      <div className="text-sm opacity-70">Cookies</div>
      <div className="text-sm">Cookies per click: {clickPower}</div>
    </div>
  );
}