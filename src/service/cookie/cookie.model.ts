type GameState = {
  coins: number;
  clickPower: number;
  coinsPerSecond: number;
  upgrades: Record<string, number>;
};
type Upgrade = {
  id: string;
  name: string;
  baseCost: number;
  effect: number;
  type: 'click' | 'production';
};