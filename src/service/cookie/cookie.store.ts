import { create } from 'zustand';

interface CookieState {
  cookies: number;
  clickPower: number;
  upgradeCost: number;
  clickCookie: () => void;
  buyUpgrade: () => void;
}

export const useCookieStore = create<CookieState>((set, get) => ({
  cookies: 0,
  clickPower: 1,
  upgradeCost: 10,
  clickCookie: () => set((state) => ({ cookies: state.cookies + state.clickPower })),
  buyUpgrade: () => {
    const { cookies, clickPower, upgradeCost } = get();
    if (cookies < upgradeCost) return;
    set({ cookies: cookies - upgradeCost, clickPower: clickPower + 1, upgradeCost: Math.floor(upgradeCost * 1.5) });
  },
}));