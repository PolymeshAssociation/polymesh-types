import twoZeroZero from './2.0.0.json';
import fourZeroZero from './4.0.0.json';
import fourOneX from './4.1.x.json';
import fiveZeroX from './5.0.x.json';
import fiveOneX from './5.1.x.json';
import fiveTwoX from './5.2.x.json';
import fiveThreeX from './5.3.x.json';
import fiveFourX from './5.4.x.json';
import sixZeroX from './6.0.x.json';
import sixOneX from './6.1.x.json';
import sixThreeX from './6.3.x.json';

export default [
  { minmax: [6003000, 6999999], types: sixThreeX },
  { minmax: [6001000, 6002999], types: sixOneX },
  { minmax: [6000000, 6000009], types: sixZeroX },
  {
    minmax: [5004000, 5004009],
    types: fiveFourX,
  },
  {
    minmax: [5003000, 5003009],
    types: fiveThreeX,
  },
  {
    minmax: [5002000, 5002009],
    types: fiveTwoX,
  },
  {
    minmax: [5001000, 5001009],
    types: fiveOneX,
  },
  {
    minmax: [5000000, 5000009],
    types: fiveZeroX,
  },
  {
    minmax: [3010, 3019],
    types: fourOneX,
  },
  {
    minmax: [3002, 3002],
    types: fourOneX,
  },
  {
    minmax: [3003, 3003],
    types: fourZeroZero,
  },
  {
    minmax: [3000, 3001],
    types: fourZeroZero,
  },
  {
    minmax: [2021, 2023],
    types: twoZeroZero,
  },
  /**
   * Polymesh Private spec - These may need their own package in the future
   */
  { minmax: [1000000, 1999999], types: sixOneX }, // private v1 has the same spec as public 6.1/6.2
];
