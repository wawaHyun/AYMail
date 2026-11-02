'use client';

import { useCookieStore } from "./cookie.store";

export default function UpgradeButton() {
  const { cookies, clickPower, upgradeCost, buyUpgrade } = useCookieStore();

  return (
    <button onClick={buyUpgrade} disabled={cookies < upgradeCost} className="upgrade-button">
      Upgrade click power: {clickPower} → {clickPower + 1} ({upgradeCost} cookies)
    </button>
  );
}