export async function GET(request: Request) {
  // const limit = 5;

  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=${limit}`,
  //   {
  //     headers: {
  //       "X-CMC_PRO_API_KEY": process.env.CRYPTO_API_KEY,
  //     } as any,
  //   }
  // );

  // const result = await response.json();

  return Response.json(data);
}

const data = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    slug: "bitcoin",
    num_market_pairs: 11132,
    date_added: "2010-07-13T00:00:00.000Z",
    tags: [
      "mineable",
      "pow",
      "sha-256",
      "store-of-value",
      "state-channel",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "galaxy-digital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio",
      "bitcoin-ecosystem",
      "ftx-bankruptcy-estate",
    ],
    max_supply: 21000000,
    circulating_supply: 19715278,
    total_supply: 19715278,
    infinite_supply: false,
    platform: null,
    cmc_rank: 1,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-06-22T12:18:00.000Z",
    quote: {
      USD: {
        price: 64265.05270610489,
        volume_24h: 19554113895.254356,
        volume_change_24h: -27.2687,
        percent_change_1h: 0.00574111,
        percent_change_24h: 1.04412215,
        percent_change_7d: -3.03542573,
        percent_change_30d: -8.04782183,
        percent_change_60d: -2.63911821,
        percent_change_90d: -1.55694463,
        market_cap: 1267003379785.5103,
        market_cap_dominance: 54.123,
        fully_diluted_market_cap: 1349566106828.2,
        tvl: null,
        last_updated: "2024-06-22T12:18:00.000Z",
      },
    },
  },
  {
    id: 1027,
    name: "Ethereum",
    symbol: "ETH",
    slug: "ethereum",
    num_market_pairs: 9078,
    date_added: "2015-08-07T00:00:00.000Z",
    tags: [
      "pos",
      "smart-contracts",
      "ethereum-ecosystem",
      "coinbase-ventures-portfolio",
      "three-arrows-capital-portfolio",
      "polychain-capital-portfolio",
      "binance-labs-portfolio",
      "blockchain-capital-portfolio",
      "boostvc-portfolio",
      "cms-holdings-portfolio",
      "dcg-portfolio",
      "dragonfly-capital-portfolio",
      "electric-capital-portfolio",
      "fabric-ventures-portfolio",
      "framework-ventures-portfolio",
      "hashkey-capital-portfolio",
      "kenetic-capital-portfolio",
      "huobi-capital-portfolio",
      "alameda-research-portfolio",
      "a16z-portfolio",
      "1confirmation-portfolio",
      "winklevoss-capital-portfolio",
      "usv-portfolio",
      "placeholder-ventures-portfolio",
      "pantera-capital-portfolio",
      "multicoin-capital-portfolio",
      "paradigm-portfolio",
      "injective-ecosystem",
      "layer-1",
      "ftx-bankruptcy-estate",
    ],
    max_supply: null,
    circulating_supply: 122276217.18384786,
    total_supply: 122276217.18384786,
    infinite_supply: true,
    platform: null,
    cmc_rank: 2,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-06-22T12:18:00.000Z",
    quote: {
      USD: {
        price: 3490.361501824438,
        volume_24h: 11960045598.947746,
        volume_change_24h: -25.4951,
        percent_change_1h: -0.06639877,
        percent_change_24h: 0.13395839,
        percent_change_7d: -1.43948147,
        percent_change_30d: -10.96234904,
        percent_change_60d: 9.81815296,
        percent_change_90d: 3.19587872,
        market_cap: 426788201047.2264,
        market_cap_dominance: 18.2298,
        fully_diluted_market_cap: 426788201047.23,
        tvl: null,
        last_updated: "2024-06-22T12:18:00.000Z",
      },
    },
  },
  {
    id: 825,
    name: "Tether USDt",
    symbol: "USDT",
    slug: "tether",
    num_market_pairs: 89310,
    date_added: "2015-02-25T00:00:00.000Z",
    tags: [
      "stablecoin",
      "asset-backed-stablecoin",
      "avalanche-ecosystem",
      "solana-ecosystem",
      "arbitrum-ecosytem",
      "moonriver-ecosystem",
      "injective-ecosystem",
      "bnb-chain",
      "usd-stablecoin",
      "optimism-ecosystem",
      "fiat-stablecoin",
    ],
    max_supply: null,
    circulating_supply: 112941691562.69733,
    total_supply: 116079124154.2462,
    platform: {
      id: 1027,
      name: "Ethereum",
      symbol: "ETH",
      slug: "ethereum",
      token_address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    },
    infinite_supply: true,
    cmc_rank: 3,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-06-22T12:18:00.000Z",
    quote: {
      USD: {
        price: 0.9994906664504551,
        volume_24h: 41162429562.03776,
        volume_change_24h: -23.8897,
        percent_change_1h: -0.02630656,
        percent_change_24h: 0.02049905,
        percent_change_7d: 0.01143329,
        percent_change_30d: -0.00185421,
        percent_change_60d: -0.10278284,
        percent_change_90d: -0.07098313,
        market_cap: 112884166570.0421,
        market_cap_dominance: 4.8217,
        fully_diluted_market_cap: 116020001161.91,
        tvl: null,
        last_updated: "2024-06-22T12:18:00.000Z",
      },
    },
  },
  {
    id: 1839,
    name: "BNB",
    symbol: "BNB",
    slug: "bnb",
    num_market_pairs: 2186,
    date_added: "2017-07-25T00:00:00.000Z",
    tags: [
      "marketplace",
      "centralized-exchange",
      "payments",
      "smart-contracts",
      "alameda-research-portfolio",
      "multicoin-capital-portfolio",
      "bnb-chain",
      "layer-1",
      "sec-security-token",
      "alleged-sec-securities",
      "celsius-bankruptcy-estate",
    ],
    max_supply: null,
    circulating_supply: 147565997.97754952,
    total_supply: 147565997.97754952,
    infinite_supply: false,
    platform: null,
    cmc_rank: 4,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-06-22T12:18:00.000Z",
    quote: {
      USD: {
        price: 586.7416413284403,
        volume_24h: 1528351736.4816926,
        volume_change_24h: -15.1055,
        percent_change_1h: 0.02780621,
        percent_change_24h: 0.46121367,
        percent_change_7d: -3.58903337,
        percent_change_30d: -4.10282747,
        percent_change_60d: -3.00030538,
        percent_change_90d: 5.22941616,
        market_cap: 86583115857.61671,
        market_cap_dominance: 3.6983,
        fully_diluted_market_cap: 86583115857.62,
        tvl: null,
        last_updated: "2024-06-22T12:18:00.000Z",
      },
    },
  },
  {
    id: 5426,
    name: "Solana",
    symbol: "SOL",
    slug: "solana",
    num_market_pairs: 690,
    date_added: "2020-04-10T00:00:00.000Z",
    tags: [
      "pos",
      "platform",
      "solana-ecosystem",
      "cms-holdings-portfolio",
      "kenetic-capital-portfolio",
      "alameda-research-portfolio",
      "multicoin-capital-portfolio",
      "okx-ventures-portfolio",
      "layer-1",
      "ftx-bankruptcy-estate",
      "sec-security-token",
      "alleged-sec-securities",
      "cmc-crypto-awards-2024",
    ],
    max_supply: null,
    circulating_supply: 462002444.831582,
    total_supply: 578616434.5484285,
    infinite_supply: true,
    platform: null,
    cmc_rank: 5,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: "2024-06-22T12:18:00.000Z",
    quote: {
      USD: {
        price: 134.28827144695921,
        volume_24h: 1780349779.412046,
        volume_change_24h: -14.3616,
        percent_change_1h: 0.07363196,
        percent_change_24h: 2.21201994,
        percent_change_7d: -6.97112921,
        percent_change_30d: -23.73735659,
        percent_change_60d: -12.84352782,
        percent_change_90d: -23.23539298,
        market_cap: 62041509720.702286,
        market_cap_dominance: 2.65,
        fully_diluted_market_cap: 77701400826.31,
        tvl: null,
        last_updated: "2024-06-22T12:18:00.000Z",
      },
    },
  },
];
