import { useQuery } from "react-query";
import { fatchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
  isLight: boolean;
}

interface IHistoricalData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId, isLight }: ChartProps) {
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fatchCoinHistory(coinId)
  );

  console.log(
    data?.map(({ time_open, open, high, low, close }) => ({
      x: new Date(time_open),
      y: [open, high, low, close],
    }))
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: coinId,
              data: data?.map(({ time_open, open, high, low, close }) => ({
                x: time_open,
                y: [open, high, low, close],
              })),
            },
          ]}
          options={{
            theme: {
              mode: isLight ? "light" : "dark",
            },
            chart: {
              type: "candlestick",
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              categories: data?.map((price) => price.time_close),
              type: "datetime",
            },
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
