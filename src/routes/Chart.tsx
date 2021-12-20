import { useQuery } from 'react-query';
import { fatchCoinHistory } from '../api';

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const {isLoading, data} = useQuery(['ohlcv', coinId], () => fatchCoinHistory(coinId))
  return <h1>Chart</h1>;
}

export default Chart;
