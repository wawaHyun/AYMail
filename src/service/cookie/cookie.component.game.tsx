'use client';

import UpgradeButton from "./cookie.button";
import Cookie from "./cookie.component";
import { useCookieStore } from "./cookie.store";
import CookieStats from "./CookieStats";

export default function CookieGame() {
  const clickCookie = useCookieStore((state) => state.clickCookie);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold">Cookie Clicker</h1>
      <CookieStats />
      <Cookie onClick={clickCookie} />
      <UpgradeButton />
    </main>
  );
}