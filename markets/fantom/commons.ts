import {
  oneRay,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
  oneEther,
} from '../../helpers/constants';
import { ICommonConfiguration, eFantomNetwork } from '../../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'Commons',
  ATokenNamePrefix: 'Aave interest bearing',
  StableDebtTokenNamePrefix: 'Aave stable debt bearing',
  VariableDebtTokenNamePrefix: 'Aave variable debt bearing',
  SymbolPrefix: '',
  ProviderId: 0, // Overriden in index.ts
  OracleQuoteCurrency: 'ETH',
  OracleQuoteUnit: oneEther.toString(),
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96',
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    AaveReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
    },
  },
  // TODO: reorg alphabetically, checking the reason of tests failing
  LendingRateOracleRatesCommon: {
    WETH: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    DAI: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    TUSD: {
      borrowRate: oneRay.multipliedBy(0.035).toFixed(),
    },
    USDC: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    SUSD: {
      borrowRate: oneRay.multipliedBy(0.035).toFixed(),
    },
    USDT: {
      borrowRate: oneRay.multipliedBy(0.035).toFixed(),
    },
    BAT: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    AAVE: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    LINK: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    KNC: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    MKR: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    MANA: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    WBTC: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    ZRX: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    SNX: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    YFI: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    REN: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    UNI: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    ENJ: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    BUSD: {
      borrowRate: oneRay.multipliedBy(0.05).toFixed(),
    },
  },
  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eFantomNetwork.fantomTestnet]: undefined,
  },
  PoolAdminIndex: 0,
  EmergencyAdmin: {
    [eFantomNetwork.fantomTestnet]: undefined,
  },
  EmergencyAdminIndex: 1,
  ProviderRegistry: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  ProviderRegistryOwner: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  LendingRateOracle: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  LendingPoolCollateralManager: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  LendingPoolConfigurator: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  LendingPool: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  WethGateway: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  TokenDistributor: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  AaveOracle: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  FallbackOracle: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  ChainlinkAggregator: {
    [eFantomNetwork.fantomTestnet]: {},
  },
  ReserveAssets: {
    [eFantomNetwork.fantomTestnet]: {},
  },
  ReservesConfig: {},
  ATokenDomainSeparator: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  WETH: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  WrappedNativeToken: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  ReserveFactorTreasuryAddress: {
    [eFantomNetwork.fantomTestnet]: '',
  },
  IncentivesController: {
    [eFantomNetwork.fantomTestnet]: ZERO_ADDRESS,
  },
};
