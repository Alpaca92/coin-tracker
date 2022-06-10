const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  return await (await fetch(`${BASE_URL}/coins`)).json();
}

export async function fetchCoinInfo(coinId: string) {
  return coinId
    ? await (await fetch(`${BASE_URL}/coins/${coinId}`)).json()
    : null;
}

export async function fetchCoinTickers(coinId: string) {
  return coinId
    ? await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json()
    : null;
}

export async function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 14;

  return coinId
    ? await (
        await fetch(
          `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
        )
      ).json()
    : null;
}
