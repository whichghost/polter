import { oneRay, ZERO_ADDRESS } from '../../helpers/constants';
import { IAaveConfiguration, eFantomNetwork } from '../../helpers/types';

import { CommonsConfig } from './commons';
import {
  strategyBUSD,
  strategyDAI,
  strategySUSD,
  strategyTUSD,
  strategyUSDC,
  strategyUSDT,
  strategyAAVE,
  strategyBAT,
  strategyZRX,
  strategyKNC,
  strategyLINK,
  strategyMANA,
  strategyMKR,
  strategyREN,
  strategySNX,
  strategyUNI,
  strategyWBTC,
  strategyWETH,
  strategyYFI,
  strategyXSUSHI,
  strategyENJ,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AaveConfig: IAaveConfiguration = {
  ...CommonsConfig,
  MarketId: 'Aave genesis market',
  ProviderId: 1,
  ReservesConfig: {
    // AAVE: strategyAAVE,
    // BAT: strategyBAT,
    // BUSD: strategyBUSD,
    DAI: strategyDAI,
    // ENJ: strategyENJ,
    // KNC: strategyKNC,
    // LINK: strategyLINK,
    // MANA: strategyMANA,
    // MKR: strategyMKR,
    // REN: strategyREN,
    // SNX: strategySNX,
    // SUSD: strategySUSD,
    // TUSD: strategyTUSD,
    // UNI: strategyUNI,
    USDC: strategyUSDC,
    USDT: strategyUSDT,
    // WBTC: strategyWBTC,
    // WETH: strategyWETH,
    // YFI: strategyYFI,
    // ZRX: strategyZRX,
    // xSUSHI: strategyXSUSHI,
  },
  ReserveAssets: {
    [eFantomNetwork.fantomTestnet]: {},
  },
};

export default AaveConfig;
